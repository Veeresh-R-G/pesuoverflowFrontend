

const ErrorPage = () => {
    return (
        <div className=" bg-gradient-to-r from-purple-500 to-pink-500 text-center text-slate-50 w-auto h-screen pt-48">
            <h1 className="err-head text-8xl font-bold text-slate-50">Error 404</h1>
            <p className="text-lg font-bold mt-2">You seem to be lost bruh ! ! ! !</p>
            <p className="text-lg font-bold mt-2">Now get back to work you !@#% bitch</p>
            <a href="/"><button className="hover:border-4 border-white mt-10 w-60 rounded-xl p-3 duration-300 font-semibold uppercase text-white text-2xl">Click me</button></a>
        </div>
    );
}

export default ErrorPage;