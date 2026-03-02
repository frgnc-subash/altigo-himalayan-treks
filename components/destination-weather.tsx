"use client";

import { useEffect, useMemo, useState } from "react";
import { CloudSun, Droplets, Wind } from "lucide-react";

interface DestinationWeatherProps {
  lat: number;
  lng: number;
  name: string;
}

interface OpenMeteoCurrent {
  temperature: number;
  windspeed: number;
  weathercode: number;
}

const weatherCodeLabel: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with hail",
  99: "Thunderstorm with heavy hail",
};

export default function DestinationWeather({
  lat,
  lng,
  name,
}: DestinationWeatherProps) {
  const [current, setCurrent] = useState<OpenMeteoCurrent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadWeather() {
      try {
        setLoading(true);
        setError("");
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&timezone=auto`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error("Weather service unavailable");
        const data = await res.json();

        if (isMounted && data?.current_weather) {
          setCurrent({
            temperature: data.current_weather.temperature,
            windspeed: data.current_weather.windspeed,
            weathercode: data.current_weather.weathercode,
          });
        }
      } catch {
        if (isMounted) setError("Unable to fetch weather right now.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadWeather();
    return () => {
      isMounted = false;
    };
  }, [lat, lng]);

  const condition = useMemo(() => {
    if (!current) return "";
    return weatherCodeLabel[current.weathercode] || "Current conditions";
  }, [current]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="mb-1 text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
        Current Weather
      </p>
      <p className="mb-3 text-sm text-zinc-300">{name}</p>

      {loading && <p className="text-sm text-zinc-400">Loading weather...</p>}
      {error && <p className="text-sm text-red-300">{error}</p>}

      {current && (
        <div className="grid gap-2 text-sm text-zinc-200 sm:grid-cols-3">
          <p className="flex items-center gap-2 rounded-lg bg-black/20 px-3 py-2">
            <CloudSun className="h-4 w-4 text-primary" />
            {condition}
          </p>
          <p className="flex items-center gap-2 rounded-lg bg-black/20 px-3 py-2">
            <Droplets className="h-4 w-4 text-primary" />
            {current.temperature}°C
          </p>
          <p className="flex items-center gap-2 rounded-lg bg-black/20 px-3 py-2">
            <Wind className="h-4 w-4 text-primary" />
            {current.windspeed} km/h
          </p>
        </div>
      )}
    </div>
  );
}
