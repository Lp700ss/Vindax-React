import React from "react";

import {
  Column,
  Row,
  Img,
  Stack,
  Text,
  Input,
  Button,
  List,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const InfoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-blue_50 font-gilroy mx-[auto] w-[100%]">
        <Row className="w-[96%]">
          <Column className="bg-white_A700 items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[6%]">
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
                src="images/img_trophy_1.svg"
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
          <Column className="items-center lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]">
            <header className="w-[100%]">
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
            <List
              className="lg:gap-[56px] xl:gap-[64px] 2xl:gap-[72px] 3xl:gap-[86px] grid grid-cols-4 min-h-[auto] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] shadow-bs6 w-[100%]"
              orientation="horizontal"
            >
              <Row className="bg-white_A700 items-center justify-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius16 w-[100%]">
                <Column className="my-[4px] w-[43%]">
                  <Button
                    className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="icbRoundedBorder8"
                    size="mdIcn"
                    variant="icbFillAmberA200"
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="flex items-center justify-center"
                      alt="volume"
                    />
                  </Button>
                  <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                      BTC
                    </Text>
                    <Img
                      src="images/img_maximize.svg"
                      className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] mt-[1px] 3xl:w-[10px] lg:w-[7px] xl:w-[8px] 2xl:w-[9px]"
                      alt="maximize"
                    />
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                      USD
                    </Text>
                  </Row>
                  <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_901 tracking-ls1 w-[auto]">
                    9784.79
                  </Text>
                  <Row className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[45%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[1px] w-[31%]"
                      alt="checkmark"
                    />
                    <Text className="font-medium ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_200 tracking-ls1 w-[auto]">
                      <span className="text-teal_A700 font-gilroy">7.2%</span>
                      <span className="text-bluegray_200 font-gilroy"> </span>
                    </Text>
                  </Row>
                </Column>
                <Img
                  src="images/img_growthyes.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[47%]"
                  alt="GrowthYes"
                />
              </Row>
              <Row className="bg-white_A700 items-center justify-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius16 w-[100%]">
                <Column className="my-[4px] w-[43%]">
                  <Button
                    className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="icbRoundedBorder8"
                    size="lgIcn"
                    variant="icbFillDeeppurpleA200"
                  >
                    <Img
                      src="images/img_airplane_40X40.svg"
                      className="flex items-center justify-center"
                      alt="airplane"
                    />
                  </Button>
                  <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                      LTC
                    </Text>
                    <Img
                      src="images/img_maximize.svg"
                      className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] mt-[1px] 3xl:w-[10px] lg:w-[7px] xl:w-[8px] 2xl:w-[9px]"
                      alt="maximize One"
                    />
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                      USD
                    </Text>
                  </Row>
                  <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_901 tracking-ls1 w-[auto]">
                    8741.19
                  </Text>
                  <Row className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[48%]">
                    <Img
                      src="images/img_downno.svg"
                      className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[1px] w-[29%]"
                      alt="DownNo"
                    />
                    <Text className="font-medium ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-pink_400 tracking-ls1 w-[auto]">
                      5.2%{" "}
                    </Text>
                  </Row>
                </Column>
                <Img
                  src="images/img_growthno.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[47%]"
                  alt="GrowthNo"
                />
              </Row>
              <Row className="bg-white_A700 items-center justify-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius16 w-[100%]">
                <Column className="my-[4px] w-[43%]">
                  <Button
                    className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="icbRoundedBorder8"
                    size="mdIcn"
                    variant="icbFillDeeporange300"
                  >
                    <Img
                      src="images/img_arrowdown_40X40.svg"
                      className="flex items-center justify-center"
                      alt="arrowdown"
                    />
                  </Button>
                  <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                    <Text className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                      ETM
                    </Text>
                    <Img
                      src="images/img_maximize.svg"
                      className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] mt-[1px] 3xl:w-[10px] lg:w-[7px] xl:w-[8px] 2xl:w-[9px]"
                      alt="maximize Two"
                    />
                    <Text className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                      USD
                    </Text>
                  </Row>
                  <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_901 tracking-ls1 w-[auto]">
                    4567.16
                  </Text>
                  <Row className="lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[48%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[1px] w-[29%]"
                      alt="checkmark One"
                    />
                    <Text className="font-medium ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_200 tracking-ls1 w-[auto]">
                      <span className="text-teal_A700 font-gilroy">6.5%</span>
                      <span className="text-bluegray_200 font-gilroy"> </span>
                    </Text>
                  </Row>
                </Column>
                <Img
                  src="images/img_growthyes.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[47%]"
                  alt="Vector124"
                />
              </Row>
              <Row className="bg-white_A700 items-center justify-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius16 w-[100%]">
                <Column className="my-[4px] w-[43%]">
                  <Button
                    className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="icbRoundedBorder8"
                    size="lgIcn"
                    variant="icbFillGray902"
                  >
                    <Img
                      src="images/img_combinedshape.svg"
                      className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="CombinedShape"
                    />
                  </Button>
                  <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                    <Text className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                      BNB
                    </Text>
                    <Img
                      src="images/img_maximize.svg"
                      className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] mt-[1px] 3xl:w-[10px] lg:w-[7px] xl:w-[8px] 2xl:w-[9px]"
                      alt="maximize Three"
                    />
                    <Text className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                      USD
                    </Text>
                  </Row>
                  <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_901 tracking-ls1 w-[auto]">
                    6547.79
                  </Text>
                  <Row className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[46%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[1px] w-[30%]"
                      alt="checkmark Two"
                    />
                    <Text className="font-medium ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_200 tracking-ls1 w-[auto]">
                      <span className="text-teal_A700 font-gilroy">9.5%</span>
                      <span className="text-bluegray_200 font-gilroy"> </span>
                    </Text>
                  </Row>
                </Column>
                <Img
                  src="images/img_growthyes.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[47%]"
                  alt="Vector124 One"
                />
              </Row>
            </List>
            <Img
              src="images/img_screenshot171.png"
              className="2xl:h-[1054px] 3xl:h-[1265px] lg:h-[819px] xl:h-[937px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
              alt="Screenshot171"
            />
            <Column className="bg-white_A700 font-inter items-center xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] w-[100%]">
              <Line className="bg-gray_300 h-[1px] w-[100%]" />
              <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:pr-[28px] xl:pr-[32px] 2xl:pr-[37px] 3xl:pr-[44px] w-[96%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                  <span className="text-bluegray_600 font-inter">Showing </span>
                  <span className="text-bluegray_600 font-inter font-medium">
                    1
                  </span>
                  <span className="text-bluegray_600 font-inter"> to </span>
                  <span className="text-bluegray_600 font-inter font-medium">
                    10
                  </span>
                  <span className="text-bluegray_600 font-inter"> of </span>
                  <span className="text-bluegray_600 font-inter font-medium">
                    97
                  </span>
                  <span className="text-bluegray_600 font-inter"> results</span>
                </Text>
                <Button
                  className="font-medium lg:ml-[510px] xl:ml-[583px] 2xl:ml-[656px] 3xl:ml-[787px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[4%]"
                  size="md"
                  variant="OutlineDeeppurple800"
                >
                  1
                </Button>
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[4%]"
                  size="md"
                  variant="OutlineGray300"
                >
                  2
                </Button>
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[4%]"
                  size="md"
                  variant="OutlineGray300"
                >
                  3
                </Button>
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[4%]"
                  size="md"
                  variant="OutlineGray300"
                >
                  ...
                </Button>
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[4%]"
                  size="md"
                  variant="OutlineGray300"
                >
                  8
                </Button>
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[4%]"
                  size="md"
                  variant="OutlineGray300"
                >
                  9
                </Button>
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[4%]"
                  size="md"
                  variant="OutlineGray300"
                >
                  10
                </Button>
              </Row>
            </Column>
          </Column>
        </Row>
        <Column className="font-integralcf items-center lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
          <footer className="w-[100%]">
            <Column className="items-center w-[100%]">
              <Column className="bg-indigo_A400 items-center justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[100%]">
                <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-white_A700 tracking-ls1 w-[auto]">
                  Get in touch. Stay in touch.
                </Text>
                <Row className="font-inter lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[87%]">
                  <Column className="items-center pt-[4px] px-[4px] w-[28%]">
                    <Img
                      src="images/img_flatcoloricon.svg"
                      className="3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] w-[27%]"
                      alt="flatcoloricon"
                    />
                    <Text className="font-normal lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 tracking-ls1 w-[auto]">
                      24 / 7 Support
                    </Text>
                    <Text className="font-normal leading-[137.20%] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700 tracking-ls1 w-[77%]">
                      Got a problem? Just get in touch.
                      <br /> Our support team is available 24/7.
                    </Text>
                  </Column>
                  <Column className="items-center lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] pr-[2px] py-[2px] w-[25%]">
                    <Img
                      src="images/img_computer_1.svg"
                      className="3xl:h-[111px] lg:h-[72px] xl:h-[82px] 2xl:h-[93px] w-[32%]"
                      alt="computer"
                    />
                    <Text className="font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 tracking-ls1 w-[auto]">
                      VinDAX Blog
                      <br />
                    </Text>
                    <Text className="font-normal leading-[137.20%] mb-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700 tracking-ls1 w-[75%]">
                      News and updates from the world’s leading cryptocurrency
                      exchange.
                    </Text>
                  </Column>
                  <Column className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[24%]">
                    <Img
                      src="images/img_group_blue_200.svg"
                      className="lg:h-[58px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] w-[41%]"
                      alt="Group"
                    />
                    <Text className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 tracking-ls1 w-[auto]">
                      Community
                    </Text>
                    <Text className="font-normal leading-[137.20%] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700 tracking-ls1 w-[74%]">
                      VinDAX is global. Join the discussion in our worldwide
                      communities.
                    </Text>
                  </Column>
                  <Column className="items-center pr-[1px] py-[1px] w-[23%]">
                    <Column className="w-[36%]">
                      <Img
                        src="images/img_music_1.svg"
                        className="2xl:h-[100px] 3xl:h-[119px] lg:h-[77px] xl:h-[89px] w-[100%]"
                        alt="music"
                      />
                      <Text className="font-normal ml-[2px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 tracking-ls1 w-[auto]">
                        Careers
                        <br />
                      </Text>
                    </Column>
                    <Text className="font-normal leading-[137.20%] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700 tracking-ls1 w-[99%]">
                      VinDAX is global. Join the discussion <br />
                      in our worldwide communities.
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Row className="bg-blue_51 justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Column className="lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[24%]">
                  <Text className="font-integralcf font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 tracking-ls1 w-[auto]">
                    ABOUT VINDAX
                    <br />
                  </Text>
                  <Text className="font-inter font-normal leading-[137.20%] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[36%]">
                    About Us
                    <br />
                    <br />
                    Announcements
                    <br />
                    <br />
                    FAQs
                    <br />
                    <br />
                    Support
                    <br />
                    <br />
                    Careers
                  </Text>
                </Column>
                <Column className="lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[24%]">
                  <Text className="font-integralcf font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 tracking-ls1 w-[auto]">
                    TRADE
                  </Text>
                  <Text className="font-inter font-normal leading-[137.20%] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[57%]">
                    API
                    <br />
                    <br />
                    Fees
                    <br />
                    <br />
                    Trading Fees & Rule
                    <br />
                    <br />
                    IOS & Android App
                    <br />
                    <br />
                    Apply for Listing
                    <br />
                    <br />
                    Apply for Launchpad(IEO)
                  </Text>
                </Column>
                <Column className="lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[15%]">
                  <Text className="font-integralcf font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 tracking-ls1 w-[auto]">
                    Legal
                  </Text>
                  <Text className="font-inter font-normal leading-[137.20%] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[59%]">
                    Privacy
                    <br />
                    <br />
                    Terms Of Service
                  </Text>
                </Column>
                <Img
                  src="images/img_iphone12mocku.png"
                  className="lg:h-[208px] xl:h-[238px] 2xl:h-[268px] 3xl:h-[321px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[9%]"
                  alt="iPhone12Mocku"
                />
                <Img
                  src="images/img_iphone12pro6.png"
                  className="lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] 3xl:mr-[110px] lg:mr-[71px] xl:mr-[81px] 2xl:mr-[92px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[8%]"
                  alt="iPhone12ProSix"
                />
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default InfoPage;
