/**
 * 
 * @param {boolean} checked 
 * @param {(v: boolean)} onChange 
 * @param {string} label 
 * @param {string} id 

 * @returns 
 */

export function Checkbox({checked, onChange, label, id}) {
    return <div className="form-check">
        <input type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} 
        />
        <label className="form-check-label">{label}</label>
    </div>
}