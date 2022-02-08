import React from 'react';
import {MdPerson} from 'react-icons/md';
import {BiRupee, BiSmile, BiTimeFive} from 'react-icons/bi';
import "./WorkingStyle.css";
function WorkingStyle() {
  return <>
    <section>
        <div className="background-content">
        <div className="container">
            <h2 className='wrapper-heading head-color'>Why You Choose Us</h2>
            <div className="serv-wrap text-center w-100">
                <div className="row res-caro2">
                    <div className="col-md-4 col-sm-6 col-lg-3">
                        <div className="serv-box2 position-relative overflow-hidden w-100">
                            <i className="icons"><BiTimeFive className='iocn'/></i>
                            <div className="serv-box-inner">
                                <h3 className="mb-3">Complete On Time</h3>
                                <p className="mb-0">Our Exemplary team has always ensured that we deliver what's committed before time<br /> &nbsp;</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-3">
                        <div className="serv-box2 position-relative overflow-hidden w-100">
                            <i className="icons"><BiSmile className='iocn'/></i>
                            <div className="serv-box-inner">
                                <h3 className="mb-3">Happy Client</h3>
                                <p className="mb-0">Our customer requirement is the first policy, we have ensured transparency in all our endeavours<br /> &nbsp;</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-3">
                        <div className="serv-box2 position-relative overflow-hidden w-100">
                            <i className="icons"><MdPerson className='iocn'/></i>
                            <div className="serv-box-inner">
                                <h3 className="mb-3">Experienced Engineer </h3>
                                <p className="mb-0">Professional team that believes in a Customer First policy. We design and deliver one of the best</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-3">
                        <div className="serv-box2 position-relative overflow-hidden w-100">
                            <i className="icons"><BiRupee className='iocn'/></i>
                            <div className="serv-box-inner">
                                <h3 className="mb-3">Value For Money</h3>
                                <p className="mb-0">We make what you want under the best price. Assured great homes at the best value for money </p>

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
