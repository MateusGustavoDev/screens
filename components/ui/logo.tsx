import { ComponentProps } from "react";

interface LogoProps extends ComponentProps<"svg"> {
  size?: number;
}

export function Logo({ size = 40 }: LogoProps) {
  return (
    <svg
      className={`h-[44px] w-[170px] max-sm:h-[30px] max-sm:w-[110px]`}
      viewBox="0 0 170 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3636 21.9851V21.958C11.9384 21.7454 12.3955 21.4063 12.7308 20.945C13.0705 20.4837 13.2403 19.9275 13.2403 19.2762C13.2403 18.6476 13.0792 18.0914 12.7569 17.6075C12.4304 17.1236 11.995 16.7528 11.4507 16.4905C10.902 16.2327 10.2925 16.1016 9.63061 16.1016H5.17188V27.8415H9.63061C10.2925 27.8415 10.902 27.7104 11.4507 27.4526C11.995 27.1903 12.4304 26.8195 12.7569 26.3356C13.0792 25.8517 13.2403 25.2955 13.2403 24.6669C13.2403 24.0156 13.0705 23.4594 12.7308 22.9981C12.3955 22.5368 11.9384 22.1977 11.3636 21.9851ZM7.24884 18.0643H9.55223C10.053 18.0643 10.4448 18.1999 10.7279 18.4713C11.0109 18.7426 11.1502 19.0953 11.1502 19.534C11.1502 19.9682 11.0065 20.3254 10.7192 20.6013C10.4318 20.8771 10.0225 21.0173 9.49127 21.0173H7.24884V18.0643ZM10.7279 25.4718C10.4448 25.7432 10.053 25.8788 9.55223 25.8788H7.24884V22.9258H9.49127C10.0225 22.9258 10.4318 23.0659 10.7192 23.3418C11.0065 23.6177 11.1502 23.9749 11.1502 24.4091C11.1502 24.8477 11.0109 25.2005 10.7279 25.4718Z"
        fill="white"
      />
      <path
        d="M14.2188 16.4219H17.9373C19.0824 16.4219 20.0839 16.6616 20.933 17.1409C21.782 17.6203 22.4395 18.2896 22.9011 19.1534C23.3626 20.0171 23.5934 21.0075 23.5934 22.1381C23.5934 23.2642 23.3626 24.2591 22.9011 25.1228C22.4395 25.9866 21.7864 26.6559 20.933 27.1353C20.0839 27.6146 19.0824 27.8543 17.9373 27.8543H14.2188V16.4219ZM17.8458 25.8012C19.0345 25.8012 19.9402 25.4756 20.5629 24.8198C21.1855 24.1641 21.499 23.2687 21.499 22.1336C21.499 20.994 21.1855 20.0985 20.5629 19.4473C19.9359 18.7916 19.0302 18.466 17.8458 18.466H16.2957V25.8057H17.8458V25.8012Z"
        fill="white"
      />
      <path
        d="M4.31693 2.19361C4.86065 2.19361 5.38562 2.35426 5.82621 2.66095L5.85902 2.68042L5.89183 2.6999L33.9589 19.5194L33.987 19.5389L34.0198 19.5535C35.1495 20.1377 35.3135 21.3693 35.3135 22.0509C35.3135 23.4773 34.3198 24.3973 33.7058 24.8306L5.88715 41.6355L5.85434 41.655L5.82621 41.6745C5.36218 41.9958 4.71534 42.1418 4.31693 42.1418C3.91383 42.1418 3.27168 41.9958 2.80764 41.6745L2.74671 41.6307L2.68109 41.5966C1.80458 41.1439 1.1718 39.995 1.1718 38.8704V5.46015C1.1718 4.00943 2.19831 3.08448 2.80764 2.66095C3.25293 2.35426 3.77321 2.19361 4.31693 2.19361ZM4.31693 0.976562C3.56229 0.976562 2.80764 1.2005 2.16081 1.64837C0.862448 2.54411 0 3.8926 0 5.46015V38.8704C0 40.438 0.862448 42.0104 2.16081 42.6822C2.80764 43.1301 3.67009 43.354 4.32162 43.354C4.97314 43.354 5.8309 43.1301 6.48242 42.6822L34.3339 25.8627C35.6276 24.9669 36.4947 23.6184 36.4947 22.0509C36.4947 20.4833 35.8479 19.1348 34.5495 18.463L6.47774 1.64837C5.8309 1.2005 5.07626 0.976562 4.31693 0.976562Z"
        fill="url(#paint0_linear_37_254)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.6252 21.6626C45.6248 20.8583 44.9706 19.9541 44.6676 18.9449C44.3645 17.9358 44.3597 16.9866 44.6531 16.0974C44.9465 15.2082 45.5189 14.4538 46.3751 13.8394C47.2313 13.2199 48.3183 12.9102 49.6315 12.9102H60.5646C61.565 12.9102 62.3779 13.7544 62.3779 14.7935V14.7985C62.3779 15.8376 61.565 16.6819 60.5646 16.6819H49.6315C49.2755 16.6819 48.9629 16.7318 48.6935 16.8268C48.4194 16.9267 48.2318 17.0616 48.1308 17.2314C48.0249 17.4063 48.0201 17.6111 48.1163 17.8509C48.2077 18.0907 48.4338 18.3504 48.7897 18.6302L57.4333 25.4293C58.4337 26.2086 59.1168 27.0979 59.4823 28.097C59.8479 29.0961 59.9104 30.0303 59.6699 30.9096C59.4294 31.7888 58.9051 32.5232 58.0874 33.1227C57.2745 33.7171 56.1971 34.0169 54.8599 34.0169H43.5516C42.5512 34.0169 41.7383 33.1726 41.7383 32.1335V32.1285C41.7383 31.0894 42.5512 30.2451 43.5516 30.2451H54.8599C55.6728 30.2451 56.1249 30.0903 56.2067 29.7756C56.2885 29.4608 55.9855 29.0462 55.2976 28.5216L46.6252 21.6626ZM62.687 17.8399C63.1054 16.8557 63.6682 15.9965 64.3801 15.2721C65.092 14.5477 65.9241 13.9732 66.8861 13.5486C67.8481 13.124 68.8774 12.9142 69.9885 12.9142H77.2227C78.2232 12.9142 79.0361 13.7584 79.0361 14.7975V14.8025C79.0361 15.8416 78.2232 16.6859 77.2227 16.6859H69.9837C69.3777 16.6859 68.8197 16.8008 68.3098 17.0306C67.8 17.2604 67.343 17.5651 66.9486 17.9448C66.5542 18.3245 66.2464 18.7791 66.0251 19.2986C65.8038 19.8182 65.698 20.3727 65.698 20.9622V28.2659C65.698 28.8104 65.8952 29.275 66.2945 29.6697C66.6889 30.0593 67.1699 30.2591 67.7327 30.2591H77.2227C78.2232 30.2591 79.0361 31.1034 79.0361 32.1425V32.1475C79.0361 33.1866 78.2232 34.0309 77.2227 34.0309H67.7327C66.939 34.0309 66.1983 33.881 65.5104 33.5763C64.8226 33.2715 64.2214 32.8619 63.7115 32.3423C63.2017 31.8228 62.7976 31.2083 62.5042 30.5039C62.2108 29.7995 62.0665 29.0552 62.0665 28.2759V20.9772C62.0617 19.8731 62.2685 18.829 62.687 17.8399ZM83.0602 15.2371C82.358 15.9865 81.8145 16.8807 81.4297 17.9198C81.0449 18.9639 80.8525 20.1129 80.8477 21.3668V32.1325C80.8477 33.1716 81.6605 34.0159 82.661 34.0159H82.6658C83.6663 34.0159 84.4792 33.1716 84.4792 32.1325V21.3668C84.4792 19.978 84.8832 18.854 85.6865 17.9848C86.4898 17.1205 87.5528 16.6859 88.8659 16.6859H92.281C93.2815 16.6859 94.0944 15.8416 94.0944 14.8025V14.7975C94.0944 13.7584 93.2815 12.9142 92.281 12.9142H88.8659C87.6778 12.9142 86.586 13.114 85.5951 13.5136C84.6043 13.9133 83.7577 14.4878 83.0602 15.2371ZM99.0035 29.4998C99.7153 29.9994 100.504 30.2492 101.384 30.2492H109.215C110.216 30.2492 111.028 31.0934 111.028 32.1325V32.1375C111.028 33.1766 110.216 34.0209 109.215 34.0209H101.384C100.321 34.0209 99.3161 33.8061 98.3782 33.3714C97.4402 32.9368 96.6129 32.3573 95.9058 31.633C95.194 30.9086 94.636 30.0543 94.232 29.0802C93.8231 28.106 93.6211 27.0619 93.6211 25.9579V21.0471C93.6211 19.9431 93.8231 18.894 94.232 17.9098C94.6408 16.9257 95.1988 16.0614 95.9058 15.3221C96.6129 14.5877 97.4402 13.9982 98.3782 13.5636C99.3161 13.129 100.321 12.9142 101.384 12.9142H106.175C107.426 12.9142 108.45 13.2139 109.244 13.8084C110.038 14.4029 110.557 15.1422 110.807 16.0215C111.057 16.9007 111.014 17.8299 110.682 18.819C110.35 19.8082 109.701 20.7024 108.739 21.5017L99.0035 29.4998ZM97.2526 26.0828L106.521 18.5693C106.772 18.3744 106.969 18.1646 107.118 17.9348C107.262 17.705 107.33 17.5002 107.32 17.3153C107.31 17.1305 107.214 16.9806 107.036 16.8607C106.858 16.7408 106.57 16.6809 106.175 16.6809H101.384C100.822 16.6809 100.288 16.7958 99.7875 17.0206C99.2873 17.2504 98.8495 17.5551 98.4744 17.9498C98.0992 18.3395 97.801 18.7991 97.5797 19.3336C97.3585 19.8631 97.2526 20.4326 97.2526 21.0421V26.0828ZM120.24 30.2492C119.36 30.2492 118.566 29.9994 117.859 29.4998L127.594 21.5017C128.556 20.7024 129.206 19.8032 129.538 18.819C129.869 17.8299 129.913 16.9007 129.663 16.0215C129.413 15.1422 128.893 14.4029 128.099 13.8084C127.306 13.2139 126.281 12.9142 125.031 12.9142H120.24C119.177 12.9142 118.172 13.129 117.234 13.5636C116.296 13.9982 115.473 14.5877 114.761 15.3221C114.054 16.0614 113.496 16.9257 113.087 17.9098C112.679 18.894 112.477 19.9431 112.477 21.0471V25.9579C112.477 27.0619 112.679 28.106 113.087 29.0802C113.491 30.0543 114.049 30.9086 114.761 31.633C115.468 32.3573 116.296 32.9368 117.234 33.3714C118.172 33.8061 119.177 34.0209 120.24 34.0209H128.071C129.071 34.0209 129.884 33.1766 129.884 32.1375V32.1325C129.884 31.0934 129.071 30.2492 128.071 30.2492H120.24ZM125.377 18.5693L116.108 26.0828V21.0421C116.108 20.4326 116.214 19.8631 116.435 19.3336C116.656 18.7991 116.955 18.3395 117.33 17.9498C117.705 17.5551 118.143 17.2504 118.643 17.0206C119.143 16.7958 119.677 16.6809 120.24 16.6809H125.031C125.425 16.6809 125.714 16.7408 125.892 16.8607C126.07 16.9806 126.166 17.1305 126.175 17.3153C126.185 17.5002 126.118 17.705 125.973 17.9348C125.824 18.1646 125.627 18.3744 125.377 18.5693ZM140.998 12.9142C142.21 12.9142 143.302 13.114 144.288 13.5136C145.269 13.9133 146.111 14.4878 146.808 15.2371C147.506 15.9865 148.049 16.8807 148.439 17.9198C148.824 18.9589 149.016 20.1079 149.016 21.3668V30.2451H161.528C162.341 30.2451 162.793 30.0903 162.875 29.7756C162.956 29.4608 162.653 29.0462 161.966 28.5216L153.288 21.6626C152.288 20.8583 151.634 19.9541 151.331 18.9449C151.028 17.9358 151.023 16.9866 151.316 16.0974C151.61 15.2082 152.182 14.4538 153.038 13.8394C153.894 13.2199 154.982 12.9102 156.295 12.9102H167.228C168.228 12.9102 169.041 13.7544 169.041 14.7935V14.7985C169.041 15.8376 168.228 16.6819 167.228 16.6819H156.295C155.939 16.6819 155.626 16.7318 155.357 16.8268C155.087 16.9267 154.9 17.0616 154.794 17.2314C154.688 17.4063 154.683 17.6111 154.779 17.8509C154.871 18.0907 155.097 18.3504 155.453 18.6302L164.096 25.4293C165.097 26.2086 165.78 27.0979 166.145 28.097C166.511 29.0961 166.574 30.0303 166.333 30.9096C166.093 31.7888 165.563 32.5232 164.751 33.1227C163.938 33.7171 162.86 34.0169 161.528 34.0169H148.406V34.0159H145.385V21.3668C145.385 19.978 144.981 18.854 144.177 17.9848C143.374 17.1205 142.316 16.6859 140.998 16.6859H137.333C136.539 16.6859 135.943 16.9257 135.548 17.4003C135.154 17.8749 134.952 18.5493 134.952 19.4185V32.1375C134.952 33.1766 134.139 34.0209 133.138 34.0209H133.134C132.133 34.0209 131.32 33.1766 131.32 32.1375V19.4185C131.32 18.5093 131.46 17.6551 131.744 16.8657C132.027 16.0764 132.427 15.387 132.951 14.8025C133.47 14.218 134.105 13.7584 134.846 13.4187C135.587 13.084 136.419 12.9142 137.338 12.9142H140.998Z"
        fill="url(#paint1_diamond_37_254)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_37_254"
          x1="-10.0337"
          y1="22.1653"
          x2="42.9272"
          y2="22.1652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F41B3B" />
          <stop offset="1" stop-color="#1884F7" />
        </linearGradient>
        <radialGradient
          id="paint1_diamond_37_254"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(181.007 34.0308) rotate(-166.076) scale(171.04 3738.21)"
        >
          <stop offset="0.0364583" stop-color="#F41B3B" />
          <stop offset="0.369792" stop-color="#AE46B9" />
          <stop offset="0.630208" stop-color="#8F76FC" />
          <stop offset="1" stop-color="#1884F7" />
        </radialGradient>
      </defs>
    </svg>
  );
}
