import { useState } from "react";

const Form = () => {
    const [formStep, setFormStep] = useState(0);
    const Complate = () => {
        setFormStep(cur => cur + 1)
    }
    const RenderButton = () => {
        if (formStep > 2) {
            return undefined
        } else {
            return <div className="flex justify-end w-[250px]">
                <button type="button" className="bg-slate-600 text-white py-2 px-4 rounded-md" onClick={Complate}>next</button>
            </div>
        }
    }
    // let cleave = new Cleave('.input-element', {
    //     creditCard: true,
    //     onCreditCardTypeChanged: function (type) {
    //         // update UI ...
    //     }
    // });

    return (
        <>
            <div>
                <form className="flex flex-col justify-center items-center gap-3 bg-slate-300 w-[350px] h-[400px] rounded-xl shadow-2xl shadow-slate-600">
                    {formStep === 0 && (
                        <>
                            <label className="text-5xl mb-3 text-slate-400">Step 1</label>
                            <input type="email" placeholder="you@example.com" className="w-[250px] py-2 px-3 outline-white rounded-md" />
                            <input type="password" placeholder="your password" className="w-[250px] py-2 px-3 outline-white rounded-md" />
                            <input type="password" placeholder="confirm your password" className="w-[250px] py-2 px-3 outline-white rounded-md" />
                        </>
                    )}

                    {formStep === 1 && (
                        <>
                            <label className="text-5xl mb-3 text-slate-400">Step 2</label>
                            <button className="bg-slate-200 w-[250px] py-2 px-3 rounded-md">Basic $7.99</button>
                            <button className="bg-slate-200 w-[250px] py-2 px-3 rounded-md">Standard $9.99</button>
                            <button className="bg-slate-200 w-[250px] py-2 px-3 rounded-md">Premium $11.99</button>
                        </>
                    )}

                    {formStep === 2 && (
                        <>
                            <label className="text-5xl mb-3 text-slate-400">Step 3</label>
                            <div className="flex justify-start items-center gap-2 w-[250px] text-slate-600"><input type="checkbox" />Male</div>
                            <div className="flex justify-start items-center gap-2 w-[250px] text-slate-600"><input type="checkbox" />Female</div>
                            <div className="flex justify-start items-center gap-2 w-[250px] text-slate-600"><input type="checkbox" />Custom</div>
                        </>
                    )}
                    {formStep === 3 && (
                        <p className="text-3xl text-slate-600">You are logined</p>
                    )}
                    {RenderButton()}
                </form>
            </div>
        </>
    );
};

export default Form;
