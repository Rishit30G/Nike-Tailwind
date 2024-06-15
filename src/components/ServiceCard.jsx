const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex flex-col sm:w-[450px] sm:min-w[450px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="font-palanquin text-2xl font-bold mt-5 leading-normal">{label}</h3>
        <p className="mt-3 text-xl text-slate-gray font-montserrat">{subtext}</p>
    </div>
  )
}

export default ServiceCard