export default function Calendar() {
    return (
        <>

            <div className="calendar">
                <div className="base top">
                    <div className="year-side">2017</div>
                    <div className="month-side">MAY</div>
                    <div className="holes">
                        <div className="hole"></div>
                        <div className="hole"></div>
                        <div className="hole"></div>
                        <div className="hole"></div>
                        <div className="hole"></div>
                        <div className="hole"></div>
                    </div>
                </div>
                <div className="base bottom">
                    <div className="days">
                        {/* <div className="weekday">SUN</div>
                        <div className="weekday">MON</div>
                        <div className="weekday">TUE</div>
                        <div className="weekday">WED</div>
                        <div className="weekday">THU</div>
                        <div className="weekday">FRI</div>
                        <div className="weekday">SAT</div> */}

                        <div className="daydate holiday"> SUN <br /> 30 <p>200 Slots</p></div>
                        <div className="daydate"> MON <br /> 1 <p>200 Slots</p></div>
                        <div className="daydate"> TUE <br /> 2</div>
                        <div className="daydate"> WED <br /> 3</div>
                        <div className="daydate"> THU <br /> 4</div>


                    </div>
                    <div className="holes">
                        <div className="hole"></div>
                        <div className="hole"></div>
                        <div className="hole"></div>
                        <div className="hole"></div>
                        <div className="hole"></div>
                        <div className="hole"></div>
                    </div>
                </div>
                <div className="rings">
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                </div>
            </div>
        </>
    )
}
