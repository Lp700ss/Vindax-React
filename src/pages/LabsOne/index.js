import React from "react";

import { Row, Column, Img, Stack, Text, Input, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const LabsOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-blue_50 mx-[auto] lg:pb-[48px] xl:pb-[55px] 2xl:pb-[62px] 3xl:pb-[74px] lg:pr-[48px] xl:pr-[55px] 2xl:pr-[62px] 3xl:pr-[74px] w-[100%]">
        <Column className="bg-white_A700 items-center lg:mb-[2581px] xl:mb-[2952px] 2xl:mb-[3321px] 3xl:mb-[3985px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[6%]">
          <Img
            src="images/img_lightbulb.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[90%]"
            alt="lightbulb"
          />
          <Column className="lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[40px] lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[52%]">
            <Img
              src="images/img_download.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] ml-[4px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
              alt="download"
            />
            <Img
              src="images/img_download_24X24.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] ml-[3px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
              alt="download One"
            />
            <Img
              src="images/img_bookmark.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[53%]"
              alt="bookmark"
            />
            <Img
              src="images/img_close.svg"
              className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[53%]"
              alt="close"
            />
            <Img
              src="images/img_trophy_5.svg"
              className="lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:mt-[400px] xl:mt-[458px] 2xl:mt-[515px] 3xl:mt-[618px] w-[100%]"
              alt="trophy"
            />
            <Stack className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]">
              <Img
                src="images/img_arrowleft.svg"
                className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius4 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="arrowleft"
              />
            </Stack>
            <Img
              src="images/img_save.svg"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[57%]"
              alt="save"
            />
          </Column>
        </Column>
        <header className="lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]">
          <Row className="lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
            <Column className="font-inter mt-[1px] w-[37%]">
              <Text className="cursor-pointer hover:font-normal font-normal lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
                Hello Crypto Exchanger
              </Text>
              <Text className="cursor-pointer font-medium hover:font-normal mt-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 hover:text-bluegray_900 w-[auto]">
                4.45 pm 19 Jan 2022
              </Text>
            </Column>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-gilroy font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
              wrapClassName="flex w-[33%]"
              name="FrameTwentySix"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer lg:w-[15px] lg:h-[16px] lg:ml-[4px] lg:mr-[7px] xl:w-[17px] xl:h-[18px] xl:ml-[5px] xl:mr-[8px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[6px] 2xl:mr-[10px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[7px] 3xl:mr-[12px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#adb5cf"
                    className="cursor-pointer lg:w-[15px] lg:h-[16px] lg:ml-[7px] lg:mr-[17px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcRoundedBorder8"
              size="smSrc"
              variant="srcOutlineBluegray40033"
            ></Input>
            <Button
              className="font-inter font-normal lg:ml-[112px] xl:ml-[128px] 2xl:ml-[145px] 3xl:ml-[174px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[8%]"
              shape="RoundedBorder5"
              size="md"
              variant="FillWhiteA700"
            >
              {" "}
              Login
            </Button>
            <Button
              className="font-inter font-normal lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[8%]"
              shape="RoundedBorder5"
              size="md"
              variant="FillIndigoA400"
            >
              Register{" "}
            </Button>
          </Row>
        </header>
      </Row>
    </>
  );
};

export default LabsOnePage;
