"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Backpack,
  CalendarDays,
  Check,
  ChevronDown,
  Globe2,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  Send,
  SlidersHorizontal,
  UserCircle2,
  Users,
} from "lucide-react";
import { destinations } from "@/lib/destinations-data";
import { trekPackages } from "@/lib/packages-data";

type BookingForm = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  pickupLocation: string;
  destination: string;
  packageId: string;
  startDate: string;
  people: number;
  tripStyle: string;
  accommodation: string;
  addOns: string[];
  customNotes: string;
};

const initialForm: BookingForm = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  pickupLocation: "",
  destination: "",
  packageId: "",
  startDate: "",
  people: 1,
  tripStyle: "balanced",
  accommodation: "standard",
  addOns: [],
  customNotes: "",
};

type DropdownOption = {
  value: string;
  label: string;
};

function FormDropdown({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((item) => item.value === value);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="h-11 w-full rounded-lg border-0 bg-[#060607] px-3 text-left text-sm text-zinc-100 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition hover:bg-[#101012] focus-visible:bg-[#101012] focus-visible:shadow-[0_0_0_2px_rgba(255,255,255,0.18)]"
      >
        <span className={selected ? "text-zinc-100" : "text-zinc-500"}>
          {selected?.label || placeholder}
        </span>
        <ChevronDown
          className={`pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-xl bg-[#0a0a0c] p-1 shadow-[0_16px_34px_rgba(0,0,0,0.55)]">
          <div className="max-h-56 overflow-auto">
            {options.map((item) => {
              const isSelected = item.value === value;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => {
                    onChange(item.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                    isSelected ? "bg-white/[0.12] text-white" : "text-zinc-200 hover:bg-white/[0.06]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isSelected && <Check className="h-4 w-4" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function BookingPage() {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const controlClass =
    "h-11 w-full rounded-lg border-0 bg-[#060607] px-3 text-sm text-zinc-100 outline-none ring-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition placeholder:text-zinc-500 focus:bg-[#101012] focus:shadow-[0_0_0_2px_rgba(255,255,255,0.18)]";
  const textareaClass =
    "w-full resize-none rounded-lg border-0 bg-[#060607] px-3 py-2 text-sm text-zinc-100 outline-none ring-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition placeholder:text-zinc-500 focus:bg-[#101012] focus:shadow-[0_0_0_2px_rgba(255,255,255,0.18)]";

  const setField = <K extends keyof BookingForm>(key: K, value: BookingForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleAddOn = (value: string) => {
    setForm((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(value)
        ? prev.addOns.filter((item) => item !== value)
        : [...prev.addOns, value],
    }));
  };

  useEffect(() => {
    const packageFromQuery = searchParams.get("package");
    if (!packageFromQuery) return;

    const selectedPackage = trekPackages.find((pkg) => pkg.id === packageFromQuery);
    if (!selectedPackage) return;

    const linkedDestination = destinations.find((d) => d.id === packageFromQuery);

    setForm((prev) => {
      const nextPackageId = prev.packageId || selectedPackage.id;
      const nextDestination = prev.destination || linkedDestination?.name || prev.destination;

      if (prev.packageId === nextPackageId && prev.destination === nextDestination) {
        return prev;
      }

      return {
        ...prev,
        packageId: nextPackageId,
        destination: nextDestination,
      };
    });
  }, [searchParams]);

  const selectedPackage = useMemo(
    () => trekPackages.find((p) => p.id === form.packageId),
    [form.packageId],
  );

  const parseTier = (label: string) => {
    const cleaned = label.toLowerCase().replace(/\s/g, "");
    const rangeMatch = cleaned.match(/(\d+)-(\d+)/);
    if (rangeMatch) {
      return { min: Number(rangeMatch[1]), max: Number(rangeMatch[2]) as number | null };
    }
    const plusMatch = cleaned.match(/(\d+)\+/);
    if (plusMatch) {
      return { min: Number(plusMatch[1]), max: null as number | null };
    }
    const exactMatch = cleaned.match(/(\d+)/);
    if (exactMatch) {
      const exact = Number(exactMatch[1]);
      return { min: exact, max: exact as number | null };
    }
    return { min: 1, max: null as number | null };
  };

  const extractPrice = (value: string) => {
    const numberPart = value.replace(/[^0-9.]/g, "");
    return Number(numberPart || 0);
  };

  const unitPrice = useMemo(() => {
    if (!selectedPackage) return 0;

    const sorted = [...selectedPackage.pricing].sort(
      (a, b) => parseTier(b.label).min - parseTier(a.label).min,
    );
    const tier = sorted.find((item) => {
      const { min, max } = parseTier(item.label);
      return form.people >= min && (max === null || form.people <= max);
    });

    return extractPrice(tier?.price || selectedPackage.pricing[0]?.price || "0");
  }, [selectedPackage, form.people]);

  const totalPrice = unitPrice * form.people;

  const formatUsd = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  const validate = () => {
    if (!form.firstName.trim()) return "Please enter your first name.";
    if (!form.lastName.trim()) return "Please enter your last name.";
    if (!form.email.trim() || !form.email.includes("@")) return "Please enter a valid email.";
    if (!form.packageId) return "Please select a package first.";
    if (!form.country.trim()) return "Please enter your country.";
    if (!form.pickupLocation.trim()) return "Please enter your pickup/location.";
    if (!form.destination) return "Please choose a destination.";
    if (!form.startDate) return "Please choose a start date.";
    if (form.people < 1) return "Number of people must be at least 1.";
    return "";
  };

  const buildMessage = () => {
    const selectedPackageName = selectedPackage?.name || "Not selected";
    const fullName = `${form.firstName} ${form.middleName} ${form.lastName}`
      .replace(/\s+/g, " ")
      .trim();
    return [
      "Hello Altigo Treks, I would like to book a trek.",
      "",
      `Name: ${fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Country: ${form.country}`,
      `Pickup/Location: ${form.pickupLocation}`,
      `Destination: ${form.destination}`,
      `Package: ${selectedPackageName}`,
      `Start Date: ${form.startDate}`,
      `No. of People: ${form.people}`,
      `Trip Style: ${form.tripStyle}`,
      `Accommodation: ${form.accommodation}`,
      `Add-ons: ${form.addOns.length ? form.addOns.join(", ") : "None"}`,
      `Price per Person: ${formatUsd(unitPrice)}`,
      `Total Price: ${formatUsd(totalPrice)}`,
      "",
      `Customization Notes: ${form.customNotes || "None"}`,
    ].join("\n");
  };

  const submitToWhatsApp = () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/9779707921000?text=${text}`, "_blank");
  };

  const submitToEmail = () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Booking Request - ${form.destination}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:info@altigohimalayantreks.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-[radial-gradient(circle_at_top,#111114,transparent_45%),#020203] text-foreground">
      <section className="mx-auto w-full max-w-4xl px-5 pb-16 pt-28 sm:px-8">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-zinc-300 uppercase">Booking</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Customize and Book Your Trek</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Choose destination, date/time, group size, and customization preferences. Send booking instantly via WhatsApp or Email.
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] text-zinc-300">Profile</span>
          <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] text-zinc-300">Trip Details</span>
          <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] text-zinc-300">Preferences</span>
          <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] text-zinc-300">Pricing</span>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitToWhatsApp();
          }}
          className="booking-form rounded-3xl bg-linear-to-b from-[#0c0f14]/95 to-[#07090d]/95 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.55)] backdrop-blur-sm md:p-6"
        >
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#0b0f14] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
              <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:gap-6">
                <div>
                  <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
                    <UserCircle2 className="h-4 w-4 text-zinc-300" />
                    01. Profile
                  </h2>
                  <p className="mt-1 text-xs text-zinc-400">Tell us who is making this booking.</p>
                </div>

                <div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <label className="text-sm">
                      <span className="mb-1 block text-zinc-300">First Name</span>
                      <input
                        value={form.firstName}
                        onChange={(e) => setField("firstName", e.target.value)}
                        className={controlClass}
                      />
                    </label>
                    <label className="text-sm">
                      <span className="mb-1 block text-zinc-300">Middle Name</span>
                      <input
                        value={form.middleName}
                        onChange={(e) => setField("middleName", e.target.value)}
                        className={controlClass}
                      />
                    </label>
                    <label className="text-sm">
                      <span className="mb-1 block text-zinc-300">Last Name</span>
                      <input
                        value={form.lastName}
                        onChange={(e) => setField("lastName", e.target.value)}
                        className={controlClass}
                      />
                    </label>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <label className="text-sm">
                      <span className="mb-1 flex items-center gap-1.5 text-zinc-300">
                        <Mail className="h-3.5 w-3.5 text-zinc-400" />
                        Email
                      </span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        className={controlClass}
                      />
                    </label>
                    <label className="text-sm">
                      <span className="mb-1 flex items-center gap-1.5 text-zinc-300">
                        <Phone className="h-3.5 w-3.5 text-zinc-400" />
                        Phone
                      </span>
                      <input
                        value={form.phone}
                        onChange={(e) => setField("phone", e.target.value)}
                        className={controlClass}
                      />
                    </label>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,220px)_1fr]">
                    <label className="text-sm">
                      <span className="mb-1 flex items-center gap-1.5 text-zinc-300">
                        <Globe2 className="h-3.5 w-3.5 text-zinc-400" />
                        Country
                      </span>
                      <input
                        value={form.country}
                        onChange={(e) => setField("country", e.target.value)}
                        placeholder="e.g. United States"
                        className={controlClass}
                      />
                    </label>
                    <label className="text-sm">
                      <span className="mb-1 flex items-center gap-1.5 text-zinc-300">
                        <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                        Pickup / Current Location
                      </span>
                      <input
                        value={form.pickupLocation}
                        onChange={(e) => setField("pickupLocation", e.target.value)}
                        className={controlClass}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0b0f14] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
              <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:gap-6">
                <div>
                  <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
                    <MapPinned className="h-4 w-4 text-zinc-300" />
                    02. Trip Details
                  </h2>
                  <p className="mt-1 text-xs text-zinc-400">Choose route, date, and participation details.</p>
                </div>

                <div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="text-sm">
                      <span className="mb-1 flex items-center gap-1.5 text-zinc-300">
                        <MapPinned className="h-3.5 w-3.5 text-zinc-400" />
                        Destination
                      </span>
                      <FormDropdown
                        value={form.destination}
                        onChange={(value) => setField("destination", value)}
                        placeholder="Select destination"
                        options={destinations.map((d) => ({ value: d.name, label: d.name }))}
                      />
                    </label>

                    <label className="text-sm">
                      <span className="mb-1 flex items-center gap-1.5 text-zinc-300">
                        <Backpack className="h-3.5 w-3.5 text-zinc-400" />
                        Package
                      </span>
                      <FormDropdown
                        value={form.packageId}
                        onChange={(packageId) => {
                          const linkedDestination = destinations.find((d) => d.id === packageId);
                          setForm((prev) => ({
                            ...prev,
                            packageId,
                            destination: linkedDestination?.name || prev.destination,
                          }));
                        }}
                        placeholder="Select package"
                        options={trekPackages.map((p) => ({ value: p.id, label: p.name }))}
                      />
                    </label>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <label className="text-sm">
                      <span className="mb-1 flex items-center gap-1.5 text-zinc-300">
                        <CalendarDays className="h-3.5 w-3.5 text-zinc-400" />
                        Start Date
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          value={form.startDate}
                          onChange={(e) => setField("startDate", e.target.value)}
                          className={controlClass}
                          placeholder="YYYY-MM-DD"
                        />
                      </div>
                    </label>
                    <label className="text-sm">
                      <span className="mb-1 flex items-center gap-1.5 text-zinc-300">
                        <Users className="h-3.5 w-3.5 text-zinc-400" />
                        No. of People
                      </span>
                      <div className="relative">
                        <div className={`${controlClass} flex items-center justify-between px-2`}>
                          <button
                            type="button"
                            onClick={() => setField("people", Math.max(1, form.people - 1))}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/[0.05] text-lg text-zinc-300 transition hover:bg-white/[0.11]"
                          >
                            -
                          </button>
                          <span className="text-sm font-semibold text-zinc-100">{form.people}</span>
                          <button
                            type="button"
                            onClick={() => setField("people", form.people + 1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/[0.05] text-lg text-zinc-300 transition hover:bg-white/[0.11]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0b0f14] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
              <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:gap-6">
                <div>
                  <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
                    <SlidersHorizontal className="h-4 w-4 text-zinc-300" />
                    03. Preferences & Budget
                  </h2>
                  <p className="mt-1 text-xs text-zinc-400">Customize the trip style and requirements.</p>
                </div>

                <div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <fieldset className="rounded-lg bg-[#05070b] p-3 ring-1 ring-white/8">
                      <legend className="px-1 text-sm text-zinc-300">Trip Style</legend>
                      <div className="mt-2 grid gap-2">
                        {[
                          { value: "balanced", label: "Balanced" },
                          { value: "comfort", label: "Comfort-focused" },
                          { value: "adventure", label: "Adventure-focused" },
                          { value: "photography", label: "Photography-focused" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setField("tripStyle", option.value)}
                            className={`rounded-lg px-3 py-2 text-left text-sm transition ${
                              form.tripStyle === option.value
                                ? "bg-white/[0.12] text-white"
                                : "bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08]"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <fieldset className="rounded-lg bg-[#05070b] p-3 ring-1 ring-white/8">
                      <legend className="px-1 text-sm text-zinc-300">Accommodation</legend>
                      <div className="mt-2 grid gap-2">
                        {[
                          { value: "standard", label: "Standard Tea House" },
                          { value: "premium", label: "Premium Lodge" },
                          { value: "mixed", label: "Mixed" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setField("accommodation", option.value)}
                            className={`rounded-lg px-3 py-2 text-left text-sm transition ${
                              form.accommodation === option.value
                                ? "bg-white/[0.12] text-white"
                                : "bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08]"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <label className="text-sm">
                      <span className="mb-1 block text-zinc-300">Price Per Person</span>
                      <input
                        value={form.packageId ? formatUsd(unitPrice) : "Select package first"}
                        readOnly
                        className={`${controlClass} cursor-not-allowed opacity-85`}
                      />
                    </label>

                    <label className="text-sm">
                      <span className="mb-1 block text-zinc-300">Total Price</span>
                      <input
                        value={form.packageId ? formatUsd(totalPrice) : "Select package first"}
                        readOnly
                        className={`${controlClass} cursor-not-allowed opacity-85`}
                      />
                    </label>
                  </div>

                  <fieldset className="mt-3 rounded-lg bg-[#05070b] p-3 ring-1 ring-white/8">
                    <legend className="px-1 text-sm text-zinc-300">Optional Add-ons</legend>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {[
                        "Private Transport",
                        "Single Room Upgrade",
                        "Extra Porter",
                        "Airport Drop",
                      ].map((item) => {
                        const selected = form.addOns.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleAddOn(item)}
                            className={`rounded-lg px-3 py-2 text-left text-sm transition ${
                              selected
                                ? "bg-white/[0.12] text-white"
                                : "bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08]"
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <label className="mt-3 block text-sm">
                    <span className="mb-1 block text-zinc-300">Customization Notes</span>
                    <textarea
                      rows={5}
                      value={form.customNotes}
                      onChange={(e) => setField("customNotes", e.target.value)}
                      placeholder="Food preferences, fitness concerns, alternate routes, special requests..."
                      className={textareaClass}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-[#0b0f14] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
              <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:gap-6">
                <div>
                  <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Send className="h-4 w-4 text-zinc-300" />
                    04. Submit Request
                  </h2>
                  <p className="mt-1 text-xs text-zinc-400">
                    Send your details instantly and our team will confirm next steps.
                  </p>
                </div>

                <div>
                  {!form.packageId && (
                    <p className="rounded-md bg-amber-500/12 px-3 py-2 text-sm text-amber-300">
                      Please select a package first to continue booking.
                    </p>
                  )}

                  {error && (
                    <p className="mt-3 rounded-md bg-red-500/12 px-3 py-2 text-sm text-red-300">
                      {error}
                    </p>
                  )}

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-black shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={!form.packageId}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Book via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={submitToEmail}
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-800/35 px-5 text-sm font-semibold text-slate-100 transition hover:bg-slate-700/35 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={!form.packageId}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Book via Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
