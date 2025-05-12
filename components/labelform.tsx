interface LabelProps {
    htmlFor : string
    isRequired : boolean
    title : string
}

function Label({ htmlFor, isRequired, title }: LabelProps) {
    return (
      <label htmlFor={htmlFor} className="block font-medium text-white mb-1">
        {title} {isRequired && <span className="text-red-500">*</span>}
      </label>
    );
}

export default Label