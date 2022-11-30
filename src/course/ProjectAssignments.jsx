import React from "react";
import projectImg from "../images/Book-List-Project.png";
import cartImg from "../images/Shopping-Cart.png";

import ModalImage from "react-modal-image";




const ProjectAssignments = () => {
    return (
        <div className="course__description__main">
            <div className="course__description">
                <div>
                    <h3>কী কী শিখবেন এ কোর্স থেকে?</h3>
                </div>
    <div className="gutter__div"></div>

                <hr />
                <div className="gutter__div"></div>

                <div>
                    <p>
                        একজন ফ্রন্ট-এন্ড ওয়েব ডেভেলপার হয়ে ওঠার জন্য আপনাকে একটি ওয়েবসাইট বা
                        ওয়েব অ্যাপ্লিকেশনের ফ্রন্ট-এন্ড নিয়ে খুব ভালোভাবে জানতে হবে। তাই
                        পুরো প্রোগ্রামে আপনি কয়েক ধাপে ফ্রন্ট-এন্ড ডেভেলপমেন্ট শেখার সুযোগ
                        পাবেন।
                    </p>
                </div>
            </div>
            <div className="gutter__div"></div>

            <hr />

                <div className="gutter__div"></div>
            <div className="project__assignment_lists">
                <div className="card__s">
                    <div className="card__top">
                        <div>
                            <span>Project</span>
                        </div>
                        <div>
                            <span>Assignment</span>
                        </div>
                    </div>
                    <div className="card__middle">
                        <ModalImage
                            small={projectImg}
                            large={projectImg}
                            hideDownload={true}
                            hideZoom={true}
                        />
                        {/* <img src={projectImg} alt="bookimg" /> */}
                    </div>

                    <div className="card__bottom">Book List project</div>
                </div>
                <div className="card__s">
                    <div className="card__top">
                        <div>
                            <span>Project</span>
                        </div>
                        <div>
                            <span>Assignment</span>
                        </div>
                    </div>
                    <div className="card__middle">
                        <ModalImage
                            small={cartImg}
                            large={cartImg}
                            hideDownload={true}
                            hideZoom={true}
                        />
                        {/* <img src={projectImg} alt="bookimg" /> */}
                    </div>

                    <div className="card__bottom">Book List project</div>
                </div>
                <div className="card__s">
                    <div className="card__top">
                        <div>
                            <span>Project</span>
                        </div>
                        <div>
                            <span>Assignment</span>
                        </div>
                    </div>
                    <div className="card__middle">
                        <ModalImage
                            small={projectImg}
                            large={projectImg}
                            hideDownload={true}
                            hideZoom={true}
                        />
                        {/* <img src={projectImg} alt="bookimg" /> */}
                    </div>

                    <div className="card__bottom">Book List project</div>
                </div>
                <div className="card__s">
                    <div className="card__top">
                        <div>
                            <span>Project</span>
                        </div>
                        <div>
                            <span>Assignment</span>
                        </div>
                    </div>
                    <div className="card__middle">
                        <ModalImage
                            small={cartImg}
                            large={cartImg}
                            hideDownload={true}
                            hideZoom={true}
                        />
                        {/* <img src={projectImg} alt="bookimg" /> */}
                    </div>

                    <div className="card__bottom">Book List project</div>
                </div>
            </div>

        </div>
    );
};

export default ProjectAssignments;
