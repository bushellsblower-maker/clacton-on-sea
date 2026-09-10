/** Open-Meteo client for Clacton-on-Sea. No invented values — API data only. */

export const CLACTON_LAT = 51.79;
export const CLACTON_LNG = 1.16;

const FORECAST_URL =
  `https://api.open-meteo.com/v1/forecast` +
  `?latitude=${CLACTON_LAT}&longitude=${CLACTON_LNG}` +
  `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max` +
  `&timezone=Europe%2FLondon&forecast_days=2`;

export interface DailyForecast {
  date: string;
  weatherCode: number;
  condition: string;
  highC: number;
  lowC: number;
  precipChance: number | null;
}

export interface ClactonForecast {
  timezone: string;
  days: DailyForecast[];
}

interface OpenMeteoDaily {
  time?: unknown;
  weather_code?: unknown;
  temperature_2m_max?: unknown;
  temperature_2m_min?: unknown;
  precipitation_probability_max?: unknown;
}

interface OpenMeteoResponse {
  timezone?: unknown;
  daily?: OpenMeteoDaily;
}

function asNumberArray(value: unknown): number[] | null {
  if (!Array.isArray(value) || value.length === 0) return null;
  const nums = value.map((n) => (typeof n === "number" && Number.isFinite(n) ? n : null));
  if (nums.some((n) => n === null)) return null;
  return nums as number[];
}

function asStringArray(value: unknown): string[] | null {
  if (!Array.isArray(value) || value.length === 0) return null;
  if (!value.every((v) => typeof v === "string" && v.length > 0)) return null;
  return value as string[];
}

/** WMO weather interpretation codes used by Open-Meteo. */
export function describeWeatherCode(code: number): string {
  if (code === 0) return "Clear sky";
  if (code === 1) return "Mainly clear";
  if (code === 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  if (code === 45 || code === 48) return "Fog";
  if (code === 51 || code === 53 || code === 55) return "Drizzle";
  if (code === 56 || code === 57) return "Freezing drizzle";
  if (code === 61) return "Slight rain";
  if (code === 63) return "Moderate rain";
  if (code === 65) return "Heavy rain";
  if (code === 66 || code === 67) return "Freezing rain";
  if (code === 71) return "Slight snow";
  if (code === 73) return "Moderate snow";
  if (code === 75) return "Heavy snow";
  if (code === 77) return "Snow grains";
  if (code === 80) return "Slight rain showers";
  if (code === 81) return "Rain showers";
  if (code === 82) return "Violent rain showers";
  if (code === 85 || code === 86) return "Snow showers";
  if (code === 95) return "Thunderstorm";
  if (code === 96 || code === 99) return "Thunderstorm with hail";
  return `Weather code ${code}`;
}

export function weatherIconKind(
  code: number,
): "sun" | "cloud-sun" | "cloud" | "fog" | "drizzle" | "rain" | "snow" | "storm" {
  if (code === 0 || code === 1) return "sun";
  if (code === 2) return "cloud-sun";
  if (code === 3) return "cloud";
  if (code === 45 || code === 48) return "fog";
  if (code >= 51 && code <= 57) return "drizzle";
  if (code >= 71 && code <= 77) return "snow";
  if (code === 85 || code === 86) return "snow";
  if (code === 95 || code === 96 || code === 99) return "storm";
  return "rain";
}

export async function fetchClactonForecast(): Promise<ClactonForecast> {
  const res = await fetch(FORECAST_URL);
  if (!res.ok) {
    throw new Error(`Forecast unavailable (${res.status})`);
  }
  const data = (await res.json()) as OpenMeteoResponse;
  const daily = data.daily;
  if (!daily) throw new Error("Forecast response missing daily data");

  const times = asStringArray(daily.time);
  const codes = asNumberArray(daily.weather_code);
  const highs = asNumberArray(daily.temperature_2m_max);
  const lows = asNumberArray(daily.temperature_2m_min);
  const precipRaw = daily.precipitation_probability_max;

  if (!times || !codes || !highs || !lows) {
    throw new Error("Forecast response was incomplete");
  }

  const count = Math.min(times.length, codes.length, highs.length, lows.length, 2);
  if (count < 2) {
    throw new Error("Need today and tomorrow from the forecast");
  }

  const precip = Array.isArray(precipRaw)
    ? precipRaw.map((n) => (typeof n === "number" && Number.isFinite(n) ? n : null))
    : [];

  const days: DailyForecast[] = [];
  for (let i = 0; i < count; i += 1) {
    days.push({
      date: times[i]!,
      weatherCode: codes[i]!,
      condition: describeWeatherCode(codes[i]!),
      highC: highs[i]!,
      lowC: lows[i]!,
      precipChance: precip[i] ?? null,
    });
  }

  return {
    timezone: typeof data.timezone === "string" ? data.timezone : "Europe/London",
    days,
  };
}
