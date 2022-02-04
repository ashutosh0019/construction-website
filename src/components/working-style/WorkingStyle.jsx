import React from 'react';
import {MdLocationCity , MdPerson} from 'react-icons/md';
import {BiHomeSmile, BiSmile, BiTimeFive} from 'react-icons/bi';
function WorkingStyle() {
  return <>
    <section>
        <div className="area-background">
        <div className="fixed-bg"></div>
        <div className="particles-js" id="prtcl"><canvas className="particles-js-canvas-el"></canvas></div>
        <div className="container">
            <div className="serv-wrap text-center w-100">
                <div className="row res-caro2">
                    <div className="col-md-4 col-sm-6 col-lg-3">
                        <div className="serv-box2 position-relative overflow-hidden w-100">
                            <i className="icon"><BiHomeSmile/></i>
                            <div className="serv-box-inner">
                                <h3 className="mb-0">  The Ability to Deliver on Time</h3>
                                <p className="mb-0">Our Exemplary team has always ensured that we deliver what's committed before time<br /> &nbsp;</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-3">
                        <div className="serv-box2 position-relative overflow-hidden w-100">
                            <i className="icon"></i>
                            <div className="serv-box-inner">
                                <h3 className="mb-0">The Guarantee of Fair Practices</h3>
                                <p className="mb-0">With a clear vision of perfection, we have ensured transparency in all our endeavours<br /> &nbsp;</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-3">
                        <div className="serv-box2 position-relative overflow-hidden w-100">
                            <i className="icon"></i>
                            <div className="serv-box-inner">
                                <h3 className="mb-0">The Stamp of Unshakable Integrity</h3>
                                <p className="mb-0">That which remains integral to muskan core principles is to adhere to our moral and ethical code</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-3">
                        <div className="serv-box2 position-relative overflow-hidden w-100">
                            <i className="icon"><MdLocationCity /></i>
                            <div className="serv-box-inner">
                                <h3 className="mb-0">Unlimited <br /> Potential</h3>
                                <p className="mb-0">Our ability to deliver on time and maintain perfection in all our endeavours gives is the potential to help our customer </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
</section>
  </>;
}

export default WorkingStyle;
