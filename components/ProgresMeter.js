import GaugeChart from 'react-gauge-chart'
const ProMeter = (props) => {
    return (

        <div className="meter bg-black h-80 w-72 ml-10 mt-10 mb-10 mr-9 rounded-lg p-2">
            <h1 className="font-bold text-2xl mt-10 mb-16 uppercase  text-emerald-200" style={{ textAlign: "center" }}> Progress Meter</h1>
            <GaugeChart className="text-black" id="gauge-chart1"

                //We will be passing the props paramters here !
                //we can set the text based on the response that we get to from the backend!!!
                // we can split in ranges and give messages

                colors={["#FF5F6D", "#AAFF00"]}
                arcWidth={0.2}
                percent={0.37}
            />
        </div>
    );
}

export default ProMeter;