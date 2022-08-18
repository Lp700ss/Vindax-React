import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder12: "rounded-radius12",
  icbCircleBorder12: "rounded-radius12",
  icbRoundedBorder8: "rounded-radius8",
  icbRoundedBorder4: "rounded-radius4",
  icbCustomBorderTL6:
    "rounded-bl-[6px] rounded-br-[0] rounded-tl-[6px] rounded-tr-[0]",
  icbCustomBorderLR6:
    "rounded-bl-[0] rounded-br-[6px] rounded-tl-[0] rounded-tr-[6px]",
};
const variants = {
  FillIndigoA400: "bg-indigo_A400 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-black_900",
  OutlineBlack9000c: "bg-indigo_A400 shadow-bs text-white_A700",
  OutlineDeeppurple800:
    "bg-indigo_50 border border-deep_purple_800 border-solid text-deep_purple_900",
  OutlineGray300:
    "bg-white_A700 border border-gray_300 border-solid text-bluegray_600",
  FillGray50: "bg-gray_50",
  FillOrange50: "bg-orange_50 text-lime_900",
  FillGreen50: "bg-green_50 text-green_900",
  FillGray101: "bg-gray_101 text-teal_A700",
  FillRed50: "bg-red_50 text-red_900",
  OutlineTealA7000f: "bg-teal_A700 shadow-bs3 text-white_A700",
  OutlineBluegray200:
    "border border-bluegray_200 border-solid shadow-bs2 text-gray_904",
  icbFillGray900: "bg-gray_900",
  icbFillYellow900: "bg-yellow_900",
  icbFillBlue600: "bg-blue_600",
  icbFillIndigo500: "bg-indigo_500",
  icbFillTeal400: "bg-teal_400",
  icbFillBlack902: "bg-black_902",
  icbFillAmberA200: "bg-amber_A200",
  icbFillDeeppurpleA200: "bg-deep_purple_A200",
  icbFillDeeporange300: "bg-deep_orange_300",
  icbFillGray902: "bg-gray_902",
  icbFillIndigo50: "bg-indigo_50",
  icbOutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
};
const sizes = {
  sm: "p-[4px]",
  md: "2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  lg: "lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px]",
  smIcn: "p-[2px]",
  mdIcn: "lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px]",
  lgIcn: "2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px]",
  xlIcn: "lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder8",
    "RoundedBorder12",
    "icbCircleBorder12",
    "icbRoundedBorder8",
    "icbRoundedBorder4",
    "icbCustomBorderTL6",
    "icbCustomBorderLR6",
  ]),
  variant: PropTypes.oneOf([
    "FillIndigoA400",
    "FillWhiteA700",
    "OutlineBlack9000c",
    "OutlineDeeppurple800",
    "OutlineGray300",
    "FillGray50",
    "FillOrange50",
    "FillGreen50",
    "FillGray101",
    "FillRed50",
    "OutlineTealA7000f",
    "OutlineBluegray200",
    "icbFillGray900",
    "icbFillYellow900",
    "icbFillBlue600",
    "icbFillIndigo500",
    "icbFillTeal400",
    "icbFillBlack902",
    "icbFillAmberA200",
    "icbFillDeeppurpleA200",
    "icbFillDeeporange300",
    "icbFillGray902",
    "icbFillIndigo50",
    "icbOutlineGray300",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn", "lgIcn", "xlIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
