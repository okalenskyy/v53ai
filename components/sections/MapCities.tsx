// Main Dutch cities plotted in the NL map's 0 0 1024 1024 coordinate space.
// Coordinates derived from the two known anchors (Groningen 792,202 and
// Weesp 452,456) via a linear lat/lon -> map-space fit. `anchor`/`dx` place
// each label clear of the pin and crosshair.
type City = { name: string; x: number; y: number; anchor: 'start' | 'end'; dx: number }

const CITIES: City[] = [
  { name: 'Groningen', x: 792, y: 202, anchor: 'start', dx: 13 },
  { name: 'Amsterdam', x: 421, y: 439, anchor: 'end', dx: -13 },
  { name: 'Utrecht', x: 470, y: 517, anchor: 'start', dx: 13 },
  { name: 'Den Haag', x: 288, y: 520, anchor: 'end', dx: -13 },
  { name: 'Rotterdam', x: 328, y: 565, anchor: 'end', dx: -13 },
  { name: 'Eindhoven', x: 550, y: 699, anchor: 'start', dx: 13 },
]

/**
 * City dots + labels overlay. Pass `exclude` for a city already marked by the
 * active pin (Groningen on the location map) so it is not drawn twice.
 */
export function MapCities({ exclude = [] }: { exclude?: string[] }) {
  return (
    <g className="map__cities" aria-hidden="true">
      {CITIES.filter((c) => !exclude.includes(c.name)).map((c) => (
        <g key={c.name}>
          <circle className="map__city-dot" cx={c.x} cy={c.y} r="5" />
          <text
            className="map__city-label"
            x={c.x + c.dx}
            y={c.y + 6}
            textAnchor={c.anchor}
          >
            {c.name}
          </text>
        </g>
      ))}
    </g>
  )
}
