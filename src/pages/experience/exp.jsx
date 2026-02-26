"use client"

const experience = [
    {title: "Web Developer", date: "", employment: "", des: "", company: "Hack United"},
]

export default function ExperiencePage (

) {
    return (
        <div>
            {/* ── Mesh gradient background ── */}
            <div
                className="absolute inset-0"
                style={{
                background: `
                    radial-gradient(ellipse 80% 60% at 10% 90%, rgba(17,51,153,0.55) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 50% at 90% 10%, rgba(10,35,110,0.45) 0%, transparent 55%),
                    radial-gradient(ellipse 55% 65% at 50% 45%, rgba(8,22,80,0.3) 0%, transparent 65%),
                    linear-gradient(135deg, #02040e 0%, #05091a 35%, #070f24 65%, #030710 100%)
                `,
                }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                backgroundImage:
                    "linear-gradient(rgba(40,100,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(40,100,255,0.035) 1px, transparent 1px)",
                backgroundSize: "55px 55px",
                }}
            />

            <div className="">

            </div>
        </div>
    )
}