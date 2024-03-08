import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Newsletter from './Newsletter.jsx';

function Footer() {
  return (
  <div>
    <div className="w-full bg-white-100 relative z-10 pt-5 bt-10">
    <div className='pb-10'>
      <Newsletter />
    </div>
    <div className="container mx-auto">
      <div className="lg:mx-1 mx-3 flex flex-wrap">
        
        <div className="w-full px-4 sm:w-2/3 lg:w-2/12">
          <div className="mb-10 w-full">
            <a href="" className="mb-6 inline-block max-w-[160px]">
              <img
                src={logo}
                alt="logo"
                className="max-w-full"
              />
            </a>
            <p className="text-dark flex items-center text-sm font-medium">
              <span className="text-primary mr-3 mb-2">
                <svg
                  width="19"
                  height="21"
                  viewBox="0 0 19 21"
                  className="fill-current"
                >
                  <path
                    d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z"
                  />
                  <path
                    d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z"
                  />
                  <path
                    d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z"
                  />
                </svg>
              </span>
              <span className="text-black text-sm" > Phone Number </span>
            </p>
            <p className="text-dark flex items-center text-sm font-medium">
              <span className="text-primary mr-3 mb-2">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 19 21"
                  className="fill-current"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </span>
              <span className="text-black text-sm" > Email Address </span>
            </p>
            <p className="text-dark flex items-center text-sm font-medium">
              <span className="text-primary mr-3 mb-2">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 19 21"
                  className="fill-current"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
              </span>
              <span className="text-black text-sm" > Location </span>
            </p>
          </div>
        </div>


        <div className="flex justify-center w-full px-4 sm:w-1/2 lg:w-4/12">
          <div className="flex mb-10 w-[80%]">
            <h4 className="text-dark mb-9 text-lg font-semibold"></h4>
              <a
                className="text-body-color Newslettermb-2 inline-block text-justify leading-loose"
              >
                Out of the Shadows (OOTS) is organized as a nonprofit corporation operating under section 501(c)(3); therefore, OOTS is exempt from federal and state income taxes; however to the extent OOTS incurs unrelated business income this form of income would be taxable to OOTS.
              </a>
          </div>
        </div>


        <div className="flex flex-col w-full px-4 sm:w-1/2 lg:w-3/12">
          <h4 className="text-dark mb-5 text-lg font-semibold">Resources</h4>
          <div className="flex items-center mb-10 w-full">
            <ul>
              <li>
                <a
                  className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                >
                  We Care
                </a>
              </li>
              <li>
                <a
                  className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                >
                  About Us
                </a>
              </li>
              
            </ul>
            <ul>
              <li>
                <a
                  className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                >
                  Donations
                </a>
              </li>
            </ul>
          </div>
        </div>
        

        <div className="flex w-full px-4 sm:w-1/2 lg:w-3/12 justify-center items-center">
          <div className="mb-10 w-full">
            <h4 className="text-dark mb-9 text-lg font-semibold">Follow Us On</h4>
            <div className="mb-6 flex items-center">
              <a
                href=""
                className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 8 16"
                  className="fill-current"
                >
                  <path
                    d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z"
                  />
                </svg>
              </a>
              <a
                href=""
                className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 12"
                  className="fill-current"
                >
                  <path
                    d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z"
                  />
                </svg>
              </a>
              <a
                href=""
                className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  className="fill-current"
                >
                  <path
                    d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z"
                  />
                </svg>
              </a>
              <a
                href=""
                className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 14 14"
                  className="fill-current"
                >
                  <path
                    d="M13.0214 0H1.02  <div className='w-full bg-white-100'>
                    <Newsletter />
                  </div>084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>



   < div>
      <span className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="217"
          height="229"
          viewBox="0 0 217 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
            fill="url(#paint0_linear_1179_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1179_5"
              x1="76.5"
              y1="281"
              x2="76.5"
              y2="1.22829e-05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.08" />
              <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
    <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
      <svg width="238" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="illustration-04" x1="369.483" y1="-84.633" x2="139.954" y2="-199.798" gradientUnits="userSpaceOnUse">
            <stop stopColor="#000" stopOpacity=".01" />
            <stop offset="1" stopColor="#fff" stopOpacity=".24" />
          </linearGradient>
        </defs>
        <path fillRule="evenodd" clipRule="evenodd" d="M189.135 89.198c3.624 9.678 7.039 18.799 15.713 18.187 7.885-.548 19.733-2.523 33.152-5.256v2.04c-13.345 2.709-25.125 4.663-33.013 5.211-.331.023-.657.034-.975.034-9.441 0-13.176-9.972-16.792-19.627-3.571-9.536-6.946-18.545-15.389-16.96-13.086 2.455-24.348 3.539-37.385 4.794l-.024.002c-8.07.776-17.217 1.657-27.841 2.98-4.629.58-8.116 1.595-10.919 2.411l-.016.005c-6.68 1.947-10.032 2.924-14.897-6.267-3.62-6.842-8.541-7.827-14.24-8.967h-.001c-4.793-.959-10.225-2.046-15.65-6.76C40.64 52.141 15.48 20.345.66 0H3.13c14.82 20.254 39.089 50.863 49.042 59.515 5.023 4.367 9.956 5.354 14.73 6.31 5.94 1.187 11.552 2.31 15.616 9.991 3.443 6.51 5.39 7.141 9.773 6.057-3.311.19-5.726-1.455-8.768-7.374-3.533-6.876-8.064-7.803-13.8-8.976-4.642-.949-9.902-2.025-15.275-6.679C43.995 49.797 18.704 19.375 4.057 0h2.506C21.226 19.288 45.58 48.524 55.755 57.333c4.977 4.309 9.748 5.285 14.363 6.23l.005.001c5.763 1.178 11.206 2.292 15.178 10.021 3.255 6.333 5.085 6.977 9.146 5.928-3.035.107-5.304-1.569-8.148-7.27-3.45-6.913-7.822-7.829-13.359-8.988-4.49-.939-9.58-2.004-14.902-6.593C47.268 47.376 21.798 18.312 7.406 0h2.572c14.477 18.232 39.16 46.348 49.366 55.147 4.93 4.252 9.544 5.217 14.005 6.15h.002c5.583 1.17 10.856 2.273 14.737 10.053 1.853 3.713 3.336 5.515 4.959 6.027.993.312 2.15.164 3.558-.212-2.77.013-4.89-1.707-7.534-7.175-3.363-6.95-7.578-7.854-12.914-8.998h-.003c-4.34-.93-9.259-1.984-14.528-6.509C50.465 44.901 24.695 17.086 10.69 0h2.583C27.39 17.058 52.088 43.659 62.93 52.965c4.883 4.194 9.337 5.148 13.644 6.07l.002.001c5.404 1.158 10.508 2.253 14.297 10.083 1.74 3.6 3.195 5.421 4.712 5.906 1.453.463 3.288-.17 5.829-1.05l.005-.002c2.872-.995 6.804-2.356 12.263-2.776 10.687-.813 19.576-.84 28.174-.867 8.671-.027 16.548-.055 24.765-.913-6.672.214-13.232-.169-20.311-.59-8.482-.504-17.257-1.025-27.637-.582-5.471.237-9.134 1.68-12.076 2.838-5.4 2.127-8.165 2.774-11.971-5.607-3.193-7.03-7.09-7.908-12.025-9.019-4.044-.91-8.628-1.944-13.791-6.34C56.639 39.755 30.287 15.234 16.926 0h2.688c13.353 14.888 38.3 38.212 50.492 48.595 4.787 4.075 9.115 5.051 12.933 5.911 5.26 1.184 9.802 2.207 13.407 10.142 3.19 7.023 4.631 6.458 9.418 4.574l.002-.001c2.919-1.149 6.915-2.722 12.72-2.974 10.488-.448 19.311.076 27.841.583 9.399.56 17.871 1.054 26.886.14-7.662.148-15.028-.743-22.644-1.672l-.129-.016c-8.337-1.017-16.965-2.07-27.032-1.98-5.676.051-9.475 1.759-12.25 3.006h-.001l-.009.004c-2.405 1.081-4.305 1.935-6.216 1.186-1.747-.684-3.2-2.637-4.855-6.53-3.024-7.113-6.422-7.922-11.125-9.04-3.568-.849-8.01-1.906-13.06-6.172-3.452-2.915-8.08-6.644-12.982-10.59C49.18 24.025 32.319 10.441 23.107.347A22.509 22.509 0 0121.788 0h7.364c-.172.105-.354.2-.546.282C36.59 8.69 50.299 18.877 62.563 27.985l.026.02c6.966 5.173 13.544 10.06 18.276 14.038 4.635 3.899 8.487 4.842 11.885 5.674 4.679 1.145 8.721 2.134 12.048 10.233 1.33 3.238 2.466 4.944 3.575 5.37 1.047.398 2.446-.272 4.385-1.203l.004-.002c2.896-1.39 6.848-3.288 12.92-3.288h.127l.131.001c10.128.096 18.8 1.427 27.186 2.715 10.143 1.558 19.227 2.942 29.116 1.933-8.585.026-16.703-1.72-25.117-3.543l-.012-.002c-8.19-1.775-16.659-3.61-26.357-4.05-5.874-.272-9.581 1.763-12.297 3.253l-.032.018c-2.1 1.152-3.756 2.06-5.499 1.424-1.642-.604-2.926-2.45-4.427-6.376-2.775-7.256-5.555-7.979-9.764-9.074h-.002c-3.165-.824-7.103-1.85-11.977-5.914-5.877-4.9-14.04-9.772-22.683-14.929-11.904-7.1-24.212-14.445-31.192-22.409A21.936 21.936 0 0131.402 0h2.51c.151.181.309.366.475.555a41.174 41.174 0 002.058 2.161A19.713 19.713 0 0134.51 0h2.345a21.721 21.721 0 001.719 2.138 36.154 36.154 0 001.535 1.586C39.087 2.47 38.283 1.231 37.663 0h2.283c.712 1.228 1.636 2.464 2.812 3.727.39.418.797.826 1.214 1.228A24.14 24.14 0 0140.872 0h2.188c.968 1.84 2.244 3.608 3.885 5.318a26.373 26.373 0 00.912.893A31.463 31.463 0 0144.03 0h2.22c1.672 3.3 3.549 5.556 4.882 6.906 6.749 6.832 16.135 9.186 26.072 11.678l.006.002c8.887 2.228 18.076 4.533 25.178 10.355 4.299 3.524 7.382 4.447 9.858 5.188 4.261 1.276 6.609 2.32 9.26 10.426 1.233 3.767 2.108 4.761 2.625 4.931.593.191 1.683-.578 2.941-1.475l.015-.011c2.699-1.925 6.77-4.828 13.572-4 9.344 1.131 17.646 3.986 25.674 6.748 13.142 4.52 25.555 8.787 40.152 4.348 9.929-3.023 20.193-.49 30.12 1.96l.012.003 1.382.34v2.06l-1.87-.46c-5.67-1.4-11.163-2.755-16.554-3.17 4.327.818 8.598 2.19 12.803 3.545 1.856.599 3.731 1.203 5.621 1.764v2.086c-2.099-.612-4.175-1.282-6.23-1.944l-.004-.002c-5.464-1.762-10.75-3.457-16.03-4.018 4.349 1.003 8.58 2.716 12.741 4.405 3.116 1.265 6.281 2.55 9.523 3.555v2.094c-3.516-1.053-6.922-2.435-10.272-3.795h-.003c-5.35-2.173-10.514-4.267-15.793-4.936 4.45 1.177 8.694 3.283 12.864 5.358l.173.087c4.197 2.09 8.485 4.224 13.031 5.441v2.056c-4.973-1.253-9.583-3.547-14.093-5.792h-.002c-5.186-2.582-10.186-5.06-15.439-5.842 4.499 1.353 8.69 3.858 12.803 6.321h.001c5.244 3.141 10.636 6.37 16.73 7.339v2.027c-6.578-.956-12.241-4.346-17.75-7.644l-.009-.006c-7.325-4.387-14.258-8.518-22.642-6.536 6.503.685 11.778 5.075 16.916 9.363l.083.07c5.881 4.91 11.941 9.968 20.03 9.724 1.069-.031 2.194-.083 3.372-.155v2.003c-1.156.07-2.261.12-3.313.151-.207.006-.414.01-.618.01-8.534 0-14.783-5.216-20.833-10.265l-.002-.002c-4.717-3.938-9.252-7.703-14.586-8.719 4.734 1.825 8.707 5.677 12.594 9.458l.042.041c5.622 5.471 11.424 11.116 19.623 10.832 2.143-.074 4.52-.233 7.093-.469v1.986c-2.612.248-4.968.411-7.025.482-.227.008-.453.012-.677.012-8.683 0-14.662-5.817-20.449-11.449l-.002-.002c-6.138-5.97-11.934-11.607-20.396-9.544a6.362 6.362 0 01-.264.06c6.645.94 11.198 6.85 15.624 12.615l.018.024c5.046 6.575 10.262 13.37 18.631 12.993 4.052-.18 8.987-.683 14.54-1.438v2.016c-5.51.744-10.413 1.24-14.45 1.42-.262.012-.521.018-.777.018-8.945 0-14.331-7.017-19.546-13.811l-.003-.004-.006-.007c-5.346-6.966-10.397-13.547-18.803-11.626-.132.03-.261.057-.391.084l-.311.066c6.794 1.085 10.839 8.053 14.767 14.848 4.641 8.027 9.03 15.614 17.534 15.145 5.726-.312 13.322-1.305 21.986-2.76v2.023c-8.612 1.44-16.166 2.423-21.877 2.734-.291.016-.58.024-.862.024-9.167 0-13.914-8.21-18.51-16.16l-.003-.005c-3.706-6.412-7.25-12.526-12.858-13.763 5.122 2.473 8.33 8.832 11.453 15.061 4.311 8.593 8.385 16.71 16.95 16.2 6.486-.386 15.461-1.675 25.707-3.53v2.028c-10.185 1.837-19.111 3.112-25.587 3.498-.305.018-.607.028-.902.028-9.266.001-13.681-8.802-17.955-17.325l-.001-.003-.007-.012c-3.481-6.943-6.805-13.57-12.502-14.813 5.221 2.575 8.235 9.477 11.168 16.232 3.976 9.158 7.731 17.803 16.357 17.251 7.205-.465 17.596-2.081 29.429-4.364v2.035c-11.765 2.261-22.099 3.86-29.3 4.325a14.29 14.29 0 01-.939.031c-9.357 0-13.434-9.39-17.382-18.48v-.002c-3.236-7.452-6.334-14.556-12.065-15.862 5.271 2.704 8.063 10.121 10.779 17.372l.042.114zm-85.541-10.165a58.657 58.657 0 012.739-.415c4.4-.548 8.533-1.017 12.453-1.437-3.127.273-6.375.582-9.789.953-2.012.221-3.792.54-5.403.9zm20.806-4.32c-4.073.225-8.35.52-12.983.95a43.406 43.406 0 00-5.73.921 51.813 51.813 0 013.094-.438 494.47 494.47 0 0115.619-1.434zm5.224-2.265c-4.911.104-10.092.31-15.791.743a38.9 38.9 0 00-5.905.912 46.087 46.087 0 013.305-.433c6.728-.622 12.731-.974 18.391-1.222zm-3.703-11.62h-.235c-2.341 0-4.335.317-6.08.772a28.976 28.976 0 013.885-.298c10.241-.069 18.981.981 27.421 2.011.905.11 1.799.22 2.689.326l-.39-.06-.388-.059-.01-.001c-8.314-1.277-16.911-2.597-26.892-2.69zm-64.55-31.237C48.6 20.107 34.27 9.46 26.29.733a2.244 2.244 0 01-.083.002c9.365 9.76 25.058 22.401 38.058 32.872l.08.065c5.089 4.1 9.486 7.641 12.938 10.556 4.686 3.96 8.696 4.913 12.232 5.754 4.874 1.16 9.083 2.161 12.502 10.203 1.388 3.262 2.577 4.994 3.744 5.451.701.275 1.542.12 2.573-.259a3.898 3.898 0 01-.677-.19c-1.704-.655-3.113-2.592-4.708-6.477-2.942-7.158-6.185-7.952-10.673-9.05-3.433-.84-7.704-1.887-12.698-6.087-4.691-3.944-11.256-8.82-18.207-13.982zm97.895 28.533c-8.129-2.019-16.534-4.106-26.095-4.718-2.483-.159-4.567.13-6.353.632 1.228-.155 2.562-.222 4.028-.155 9.866.449 18.418 2.301 26.688 4.092l.014.003c2.655.575 5.278 1.14 7.894 1.646a444.507 444.507 0 01-6.176-1.5zm-68.92-21.098c-6.198-5.129-14.641-9.493-23.581-14.113-2.88-1.488-5.781-2.989-8.626-4.529a942.257 942.257 0 006.96 4.182c8.713 5.198 16.942 10.108 22.94 15.11 4.528 3.777 8.07 4.699 11.196 5.513l.006.001c4.462 1.161 7.985 2.078 11.128 10.295 1.204 3.147 2.266 4.852 3.249 5.213.551.204 1.244.014 2.105-.387-.023-.007-.046-.012-.069-.016-.028-.006-.056-.012-.084-.022-1.603-.574-2.847-2.408-4.293-6.33-2.69-7.301-5.32-8.008-9.3-9.076h-.002c-3.037-.816-6.815-1.83-11.628-5.84zm71.064 19.28c-8.064-2.259-16.403-4.595-25.821-5.373-2.502-.208-4.592.076-6.377.594a21.799 21.799 0 014.086-.117c9.74.623 18.236 2.733 26.45 4.773 3.145.781 6.247 1.55 9.344 2.211-2.548-.652-5.101-1.365-7.682-2.088zM69.811 21.884l-.008-.004a654.364 654.364 0 01-4.285-1.864l2.165 1.12.012.007c8.636 4.464 17.565 9.079 23.93 14.345 4.477 3.731 7.872 4.642 10.869 5.446h.001c4.252 1.142 7.611 2.044 10.659 10.317 1.152 3.126 2.163 4.807 3.09 5.14.503.18 1.149-.019 1.955-.424-1.556-.55-2.758-2.373-4.144-6.28-2.61-7.36-4.958-8.013-8.848-9.094-2.905-.807-6.52-1.812-11.267-5.747-6.443-5.316-15.434-9.203-24.129-12.962zm70.608 24.101c-2.506-.303-4.579-.04-6.337.5a19.188 19.188 0 014.124-.013c9.477.963 17.845 3.573 25.938 6.098 3.996 1.246 7.925 2.47 11.867 3.448-3.43-1.01-6.853-2.184-10.327-3.379l-.018-.006c-7.926-2.725-16.12-5.543-25.247-6.648zm23.123 8.492c-7.996-2.494-16.264-5.073-25.539-6.016-2.495-.253-4.572.02-6.342.544a20.477 20.477 0 014.092-.066c9.602.794 18.029 3.154 26.178 5.436l.019.005c3.56.997 7.067 1.974 10.576 2.79-2.98-.825-5.959-1.749-8.978-2.69l-.006-.003zm-90.373-33.35l-.014-.006-.36-.123c8.124 3.527 16.306 7.263 22.419 12.307 4.42 3.663 7.665 4.565 10.53 5.361 4.044 1.124 7.239 2.012 10.196 10.352 1.101 3.106 2.061 4.764 2.932 5.068.459.158 1.079-.06 1.832-.468-1.453-.583-2.587-2.39-3.874-6.185-2.542-7.417-4.622-8.018-8.397-9.108l-.009-.003c-2.771-.801-6.221-1.8-10.894-5.653-6.623-5.444-15.64-8.544-24.36-11.543zm45.555 25.661c1.032 3.048 1.963 4.73 2.768 5.003.417.145 1.012-.097 1.744-.529-1.355-.615-2.427-2.41-3.629-6.085-2.45-7.49-4.398-8.073-7.931-9.131h-.002c-2.648-.793-5.944-1.78-10.552-5.558-6.026-4.94-13.81-7.262-21.575-9.25 6.993 2.523 13.83 5.43 19.253 9.888 4.361 3.594 7.591 4.527 10.187 5.277h.002c3.978 1.15 6.853 1.981 9.735 10.385z" fill="url(#illustration-04)" />
      </svg>
    </div>
  </div >



  <div className='flex w-full items-center bg-[#1B75B0] h-[100px]'>
      <div className='w-1/2 flex justify-center items-center text-center'>
        <p className="w-full text-white-100 text-body-color text-base text-center">&copy; 2023 Out of the Shadows (OOTS)</p>
      </div>
      <div className='w-1/2 flex justify-center items-center text-center'>
        <p className="w-full text-white-100 text-body-color text-base text-center">Out of the Shadows’ Federal Taxpayer I.D. Number is 36‐4975843</p>
      </div>
    </div>

  </div>
  

  );
}

export default Footer;
