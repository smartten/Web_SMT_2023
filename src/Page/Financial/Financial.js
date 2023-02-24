import "./FinancialStyle.scss";
import {
  AppstoreOutlined,
  LineChartOutlined,
  CopyOutlined,
  FundOutlined,
  FieldTimeOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
function Financial() {
  setTimeout(function () {
    var text = document.getElementsByClassName("text");
    for (var i = 0; i < text.length; i++) {
      text[i].classList.add("fadeRight", "cssanimation");
    }
    var image = document.getElementsByClassName("image");
    for (var i = 0; i < image.length; i++) {
      image[i].classList.add("fadeInLeft", "cssanimation");
    }
  }, 1000);
  return (
    <div className="financial">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    <span>Financial</span>
                  </p>
                  <p className="sub-text">
                    We'll help you develop a solution, capable of beautifully
                    visualizing data and revolutionize the financial services
                    market
                  </p>
                  <a className="btn btn-contact">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="developer-service">
        <div className="container">
          <div className="title-service">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-xl-8">
                <div class="section-title title-01 mb-70">
                  <h3 class="title">Our Solutions</h3>
                  <p class="sub-title">Solving Your Fintech Needs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-service">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <AppstoreOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">
                      Offering Your Customers An Excellent Experience
                    </b>
                    <p className="text-sub">
                      Get apps that collect, analyze, and assess data to learn
                      what your customers want and need. We help you create
                      solutions to better target your customers based on
                      preferences and online behaviors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <FundOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">
                      Accelerating Your Payment Lifecycle With Automation
                    </b>
                    <p className="text-sub">
                      Use technology like blockchain to help you securely accept
                      and transmit payments around the world in mere minutes.
                      Our solutions increase transparency while reducing your
                      transaction time and costs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <CopyOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">
                      Predicting Risks With Big Data And Artificial Intelligence
                    </b>
                    <p className="text-sub">
                      Use all the data you have at your fingertips to help your
                      customers with wealth management and other financial
                      needs. We harness Big Data and AI for use in customized
                      finance development services to predict your financial
                      risks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <SafetyCertificateOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">
                      Securing Your Assets Against Fraud
                    </b>
                    <p className="text-sub">
                      Our Fintech software adheres to strict policies and
                      regulations to help you attain international
                      certifications and to comply with global financial
                      industry standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <LineChartOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">
                      Strengthening Your Investment Management
                    </b>
                    <p className="text-sub">
                      Get agile investment performance and optimize your
                      investment management strategy through innovative
                      investment management solutions that aggregate and process
                      real-time data to identify risks and fluctuating market
                      conditions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <FieldTimeOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">
                      Boosting Your Operational Efficiency
                    </b>
                    <p className="text-sub">
                      If you don't innovate, you risk shrinking your profit and
                      earnings. Streamline your services and offerings by
                      automating your processes for faster performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="certificates">
        <div className="container">
          <div className="content-certificates">
            <h3 className="title-certificates mb-3">
              Certificates & International Standards
            </h3>
            <div className="row justify-content-center">
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="big-guys">
        <div className="container">
          <p className="text-center title-big-guy">
            This BIG guys are using DEHA services and they are more than happier
            ever
          </p>
          <div className="row">
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="benefits-of-partnering">
        <div className="container">
          <p className="title-benefit">Benefits of Partnering with DEHA</p>
          <div className="container benefit ">
            <div className="row">
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <BulbOutlined />
                </div>
                <div className="text-benefit">
                  <b>Expert Advice</b>
                  <p>
                    We are a leading digital strategy consultant. We can offer
                    an unique and consultative perspective to your digital
                    transformation strategy in general and software engineering
                    in particular.
                  </p>
                </div>
              </div>
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <SelectOutlined />
                </div>
                <div className="text-benefit">
                  <b>Quality-Focused Solutions</b>
                  <p>
                    We are using cutting-edge technologies and tools in software
                    development process to bring the highest software
                    development quality, for example automation testing, RPA...
                  </p>
                </div>
              </div>
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <UserOutlined />
                </div>
                <div className="text-benefit">
                  <b>Great Talent Pool</b>
                  <p>
                    Our team has 260+ experienced developers with in-depth
                    skills & knowledge in software building and powerful
                    technologies stacks.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <PieChartOutlined />
                </div>
                <div className="text-benefit">
                  <b>Experience</b>
                  <p>
                    We are strategic partner of big corporations such as Mitsui
                    O.S.K.Line, Marubeni, Mitani, Hino Motor, Vinmec
                    International Hospital...and delivered 1,000+ systems for
                    enterprise.
                  </p>
                </div>
              </div>
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <SwitcherOutlined />
                </div>
                <div className="text-benefit">
                  <b>All-in-One Provider</b>
                  <p>
                    Our services are comprehensive from consulting, design,
                    development, integration, deployment to system maintenance
                    and much mores.
                  </p>
                </div>
              </div>
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <PaperClipOutlined />
                </div>
                <div className="text-benefit">
                  <b>Agile Mindset</b>
                  <p>
                    An agile mindset is about creating and responding to change
                    in uncertain and turbulent environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us-v1">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Connect with us</h2>
              <p>We're ready to talk opportunity</p>
              <a className="btn btn-contact" href="/contact-us">
                Contact Us
              </a>
            </div>
            <div className="conact-img">
              <img src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/hero/Hero-img-default" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Financial;