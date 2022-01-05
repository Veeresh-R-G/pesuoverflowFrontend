import GaugeChart from 'react-gauge-chart'
const ProMeterT = (props) => {
    return (

        <div className="meter bg-black h-80 w-72 ml-48 mt-18 mb-10 mr-28 rounded-xxl">
            <h1 className="font-bold text-2xl mt-12 mb-12 uppercase  text-fuchsia-500 pt-10" style={{ textAlign: "center" }}> Progress Meter</h1>
            <GaugeChart className="text-black" id="gauge-chart1"

                //We will be passing the props paramters here !
                //we can set the text based on the response that we get to from the backend!!!
                // we can split in ranges and give messages

                colors={["#FF5F6D", "#AAFF00"]}
                nrOfLevels={10}
                arcWidth={0.3}
                percent={0.73}
            />
        </div>
    );
}

export default ProMeterT;