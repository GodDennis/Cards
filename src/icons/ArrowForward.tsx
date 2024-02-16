import {IconProps} from "@/icons/LogOutOutline";


const ArrowForward = (props: IconProps) => {
    const {fill = 'white'} = props
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5928_3156)">
                <path
                    d="M6.66668 12.6668C6.51091 12.6671 6.35995 12.6128 6.24001 12.5135C6.17251 12.4575 6.11671 12.3888 6.07581 12.3112C6.0349 12.2336 6.00971 12.1488 6.00166 12.0614C5.99361 11.9741 6.00286 11.8861 6.02889 11.8023C6.05492 11.7186 6.09721 11.6408 6.15335 11.5735L9.14001 8.00012L6.26001 4.42012C6.20464 4.35193 6.16328 4.27347 6.13833 4.18924C6.11337 4.10501 6.10531 4.01669 6.1146 3.92933C6.1239 3.84198 6.15036 3.75733 6.19248 3.68024C6.23459 3.60315 6.29153 3.53514 6.36001 3.48012C6.42899 3.41943 6.50977 3.37365 6.59728 3.34566C6.68478 3.31767 6.77713 3.30807 6.86853 3.31746C6.95993 3.32685 7.04839 3.35503 7.12838 3.40023C7.20837 3.44543 7.27815 3.50667 7.33335 3.58012L10.5533 7.58012C10.6514 7.69941 10.705 7.84904 10.705 8.00346C10.705 8.15787 10.6514 8.3075 10.5533 8.42679L7.22001 12.4268C7.15314 12.5075 7.06818 12.5712 6.97204 12.6129C6.8759 12.6546 6.77128 12.6731 6.66668 12.6668Z"
                    fill={fill}/>
            </g>
            <defs>
                <clipPath id="clip0_5928_3156">
                    <rect width="16" height="16" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default ArrowForward;