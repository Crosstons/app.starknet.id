import React, { FunctionComponent } from "react";

const CartIcon: FunctionComponent<IconProps> = ({
  width,
  color,
  secondColor,
}) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11.6562" cy="12" r="11" fill={secondColor} />
      <path
        d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM5.95166 5.06982L8.0874 5.74072C8.37014 5.83358 8.55846 6.09614 8.5913 6.36474L8.71142 7.54098L18.3823 8.62056C18.7976 8.701 19.0894 9.07594 19.0312 9.46138L18.4307 12.8451C18.3542 13.1991 18.0611 13.4417 17.7349 13.4457H9.14356L8.9751 14.4052H17.1343C17.5609 14.4202 17.8734 14.7451 17.8784 15.1244C17.8607 15.5572 17.5119 15.8405 17.1343 15.8451H8.11084C7.65572 15.8075 7.3216 15.4468 7.3916 15.0058L7.77538 12.8935L7.1748 6.98876L5.51952 6.46144C5.32752 6.39744 5.1834 6.27706 5.0874 6.10106C4.90576 5.72042 5.07542 5.29898 5.39942 5.11668C5.58434 5.02056 5.76494 5.00858 5.95166 5.06982ZM9.20362 16.2598C9.82494 16.2598 10.3286 16.7634 10.3286 17.3848C10.3286 18.0061 9.82494 18.5098 9.20362 18.5098C8.58234 18.5098 8.07862 18.0061 8.07862 17.3848C8.07862 16.7634 8.5823 16.2598 9.20362 16.2598ZM15.8071 16.2598C16.4284 16.2598 16.9321 16.7634 16.9321 17.3848C16.9321 18.0061 16.4284 18.5098 15.8071 18.5098C15.1858 18.5098 14.6821 18.0061 14.6821 17.3848C14.6821 16.7634 15.1858 16.2598 15.8071 16.2598Z"
        fill={color}
      />
    </svg>
  );
};

export default CartIcon;
