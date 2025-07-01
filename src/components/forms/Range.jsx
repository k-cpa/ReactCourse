export function Range ({label, onChange, value}) {
    return <div className="form-check">
        <input 
        type="range" 
        min={1} max={5} 
        value = {value}
        onChange = {(e) => onChange(Number(e.target.value))}
        />
        <label className="form-check-label">{label}</label>
    </div>
}