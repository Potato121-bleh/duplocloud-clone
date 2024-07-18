import Button from '@/app/element/button/button'
import './calculateSaving.css'

export default function CalculateSaving() {
    return (
        <section className="calculateSaving-main-con">
            <div className="calculateSaving-con">
                <h1 className="calculateSaving-title">
                    How much can we accelerate your time-to-market and save you
                    money?
                </h1>
                <div className="calculateSaving-desc-con">
                    <p className="calculateSaving-desc">
                        Check out our savings calculator! Simply input your
                        current compliance standard and labor time, and we'll
                        show you how we can impact your business.
                    </p>
                </div>

                <div className="calculateSaving-btn-con">
                    <Button
                        title="CALCULATE YOUR SAVING"
                        txtColor="black"
                        bgColor="green"
                    />
                </div>
            </div>
        </section>
    )
}
