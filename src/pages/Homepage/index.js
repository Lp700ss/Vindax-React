import React from "react";

import { Column, Row, Text, Input, Img, Button, List, Stack } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const HomepagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-blue_50 font-integralcf justify-end mx-[auto] lg:pt-[30px] xl:pt-[34px] 2xl:pt-[39px] 3xl:pt-[46px] w-[100%]">
        <Column className="items-end lg:px-[47px] xl:px-[54px] 2xl:px-[61px] 3xl:px-[73px] w-[100%]">
          <Column className="items-center w-[94%]">
            <Row className="w-[100%]">
              <Column className="font-inter mt-[1px] w-[37%]">
                <Text className="font-normal lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                  Hello Crypto Exchanger
                </Text>
                <Text className="font-medium mt-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 w-[auto]">
                  4.45 pm 19 Jan 2022
                </Text>
              </Column>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-gilroy font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
                wrapClassName="flex w-[37%]"
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
                className="font-inter font-normal lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[9%]"
                shape="RoundedBorder5"
                size="md"
                variant="FillWhiteA700"
              >
                {" "}
                Login
              </Button>
              <Button
                className="font-inter font-normal lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[9%]"
                shape="RoundedBorder5"
                size="md"
                variant="FillIndigoA400"
              >
                Register{" "}
              </Button>
            </Row>
            <List
              className="font-gilroy lg:gap-[56px] xl:gap-[64px] 2xl:gap-[72px] 3xl:gap-[86px] grid grid-cols-4 min-h-[auto] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] shadow-bs6 w-[100%]"
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
            <Column className="bg-white_A700 font-gilroy items-center justify-end lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] py-[1px] rounded-radius16 shadow-bs4 w-[100%]">
              <Row className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[93%]">
                <Column className="w-[71%]">
                  <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_901 tracking-ls1 w-[auto]">
                    Market Overview
                  </Text>
                  <Text className="font-medium ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-teal_A700 tracking-ls1 w-[auto]">
                    7.2141,997.5 (25%)
                  </Text>
                </Column>
                <Button
                  className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[4%]"
                  shape="RoundedBorder12"
                  size="md"
                  variant="OutlineTealA7000f"
                >
                  ALL
                </Button>
                <Button
                  className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[4%]"
                  shape="RoundedBorder12"
                  size="md"
                  variant="OutlineBluegray200"
                >
                  1M
                </Button>
                <Button
                  className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[4%]"
                  shape="RoundedBorder12"
                  size="md"
                  variant="OutlineBluegray200"
                >
                  6M
                </Button>
                <Button
                  className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[4%]"
                  shape="RoundedBorder12"
                  size="md"
                  variant="OutlineBluegray200"
                >
                  1Y
                </Button>
                <Button
                  className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[6%]"
                  shape="RoundedBorder12"
                  size="md"
                  variant="OutlineBluegray200"
                >
                  YTD
                </Button>
              </Row>
              <Stack className="lg:h-[230px] xl:h-[263px] 2xl:h-[296px] 3xl:h-[355px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                <Stack className="absolute lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] top-[2%] w-[100%]">
                  <Stack className="absolute font-gilroy lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] w-[100%]">
                    <Row
                      className="absolute bg-cover bg-repeat bottom-[0] justify-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius16 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group272.png')",
                      }}
                    >
                      <Row className="items-center justify-center 3xl:ml-[1113px] lg:ml-[721px] xl:ml-[824px] 2xl:ml-[927px] lg:mt-[118px] xl:mt-[135px] 2xl:mt-[152px] 3xl:mt-[182px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius14 w-[6%]">
                        <div className="bg-indigo_400 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                        <Text className="font-bold mb-[3px] ml-[4px] lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 tracking-ls1 w-[auto]">
                          Buy
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] 2xl:mr-[112px] 3xl:mr-[134px] lg:mr-[87px] xl:mr-[99px] lg:mt-[118px] xl:mt-[135px] 2xl:mt-[152px] 3xl:mt-[182px] p-[1px] rounded-radius14 w-[6%]">
                        <div className="bg-teal_A700 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                        <Text className="font-bold 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 tracking-ls1 w-[auto]">
                          Sell
                        </Text>
                      </Row>
                    </Row>
                    <Img
                      src="images/img_pin.png"
                      className="absolute lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] left-[29%] w-[6%]"
                      alt="Pin"
                    />
                  </Stack>
                  <Text className="absolute bottom-[19%] font-bold font-inter left-[34%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-teal_900 tracking-ls1 w-[auto]">
                    3:59AM
                  </Text>
                </Stack>
                <Row className="absolute bg-gradient  items-center justify-center left-[29%] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius1596 shadow-bs8 top-[0] w-[7%]">
                  <div className="bg-teal_A400 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                  <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mr-[11px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_904 tracking-ls1 w-[auto]">
                    $376
                  </Text>
                </Row>
              </Stack>
            </Column>
            <Column className="bg-white_A700 font-gilroy justify-end lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 shadow-bs6 w-[100%]">
              <Text className="font-medium ml-[3px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_901 tracking-ls1 w-[auto]">
                Recent Activities
              </Text>
              <List
                className="font-inter gap-[0] min-h-[auto] ml-[3px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[85%]"
                orientation="vertical"
              >
                <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                  <Button
                    className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="icbRoundedBorder8"
                    size="mdIcn"
                    variant="icbFillAmberA200"
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="flex items-center justify-center"
                      alt="volume One"
                    />
                  </Button>
                  <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Bitcoin
                  </Text>
                  <Text className="font-normal lg:ml-[172px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                    10:45:16 AM
                  </Text>
                  <Text className="font-normal lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[226px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                    +1545,00
                  </Text>
                  <Img
                    src="images/img_growthyes_34X93.png"
                    className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:ml-[150px] xl:ml-[172px] 2xl:ml-[194px] 3xl:ml-[232px] w-[9%]"
                    alt="GrowthYes One"
                  />
                </Row>
                <Row className="items-center lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[15px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[99%]">
                  <Button
                    className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="icbRoundedBorder8"
                    size="mdIcn"
                    variant="icbFillDeeporange300"
                  >
                    <Img
                      src="images/img_arrowdown_40X40.svg"
                      className="flex items-center justify-center"
                      alt="arrowdown One"
                    />
                  </Button>
                  <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Ethereum
                  </Text>
                  <Text className="font-normal lg:ml-[157px] xl:ml-[180px] 2xl:ml-[203px] 3xl:ml-[243px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                    09:15:31 AM
                  </Text>
                  <Text className="font-normal lg:ml-[146px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                    +5649,00
                  </Text>
                  <Img
                    src="images/img_growthno.png"
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:ml-[146px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] w-[8%]"
                    alt="GrowthNo One"
                  />
                </Row>
                <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                  <Button
                    className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="icbRoundedBorder8"
                    size="lgIcn"
                    variant="icbFillDeeppurpleA200"
                  >
                    <Img
                      src="images/img_airplane_40X40.svg"
                      className="flex items-center justify-center"
                      alt="airplane One"
                    />
                  </Button>
                  <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                    LTC
                  </Text>
                  <Text className="font-normal lg:ml-[190px] xl:ml-[217px] 2xl:ml-[245px] 3xl:ml-[294px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                    09:01:12 AM
                  </Text>
                  <Text className="font-normal lg:ml-[146px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                    +4547,00
                  </Text>
                  <Img
                    src="images/img_growthyes_34X93.png"
                    className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:ml-[150px] xl:ml-[172px] 2xl:ml-[194px] 3xl:ml-[232px] w-[9%]"
                    alt="GrowthYes Two"
                  />
                </Row>
              </List>
            </Column>
            <Text className="font-normal 3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-black_900 tracking-ls1 w-[auto]">
              Trade Anywhere
            </Text>
            <Row className="font-inter items-center lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
              <Column className="w-[51%]">
                <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius1109 w-[84%]">
                  <Text className="font-normal leading-[137.20%] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 tracking-ls1 w-[79%]">
                    <span className="text-black_900 font-inter font-bold lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px]">
                      Mobile
                    </span>
                    <span className="text-black_900 font-inter lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px]">
                      <br />
                      <br />
                    </span>
                    <span className="text-black_900 font-inter">
                      Download the VinDAX mobile crypto trading app today.
                    </span>
                  </Text>
                  <Row className="items-center justify-between lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[97%]">
                    <Img
                      src="images/img_iconamacos1.png"
                      className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] w-[27%]"
                      alt="iconamacosOne"
                    />
                    <Img
                      src="images/img_iconawindow1.png"
                      className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] w-[27%]"
                      alt="iconawindowOne"
                    />
                    <Img
                      src="images/img_iconaqrcode1.png"
                      className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] w-[27%]"
                      alt="iconaqrcodeOne"
                    />
                  </Row>
                </Column>
                <Column className="bg-white_A700 justify-end lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius1109 w-[84%]">
                  <Text className="font-normal lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[4px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 tracking-ls1 w-[auto]">
                    Desktop
                    <br />
                  </Text>
                  <Text className="font-normal lg:leading-[10px] xl:leading-[11px] 2xl:leading-[13px] 3xl:leading-[15px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 tracking-ls1 w-[85%]">
                    The VinDAX crypto trading experience, tailor-made for your{" "}
                    <br />
                    Windows or MacOS device.{" "}
                  </Text>
                  <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[95%]">
                    <Img
                      src="images/img_iconamacos1.png"
                      className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] w-[27%]"
                      alt="iconamacosTwo"
                    />
                    <Img
                      src="images/img_iconawindow1.png"
                      className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] w-[27%]"
                      alt="iconawindowTwo"
                    />
                    <Img
                      src="images/img_iconalinux1.png"
                      className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] w-[27%]"
                      alt="iconalinuxOne"
                    />
                  </Row>
                </Column>
                <Text className="font-bold leading-[normal] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[80%]">
                  <span className="text-black_900 font-inter lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    API
                    <br />
                  </span>
                  <span className="text-black_900 font-inter font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    The VinDAX crypto trading experience, tailor-made for your
                    Windows
                    <br /> or MacOS device.
                  </span>
                </Text>
                <Button
                  className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[49%]"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillIndigoA400"
                >
                  Official VinDAX API Documentation
                </Button>
              </Column>
              <Img
                src="images/img_iphone12mocku.png"
                className="lg:h-[468px] xl:h-[535px] 2xl:h-[602px] 3xl:h-[722px] w-[24%]"
                alt="iPhone12Mocku"
              />
              <Img
                src="images/img_iphone12pro6.png"
                className="lg:h-[378px] xl:h-[432px] 2xl:h-[486px] 3xl:h-[583px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] w-[20%]"
                alt="iPhone12ProSix"
              />
            </Row>
            <Row className="bg-blue_100 font-inter lg:mt-[59px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] lg:p-[28px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius16 w-[100%]">
              <Column className="lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] w-[55%]">
                <Img
                  src="images/img_socialmediain.png"
                  className="lg:h-[227px] xl:h-[259px] 2xl:h-[292px] 3xl:h-[350px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] rounded-radius32 w-[70%]"
                  alt="socialmediain"
                />
                <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[78%]">
                  <Text className="font-normal lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
                    Community & Customer Service
                    <br />
                  </Text>
                  <Text className="font-medium leading-[normal] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[87%]">
                    Welcome back to the VinDAX communication,
                    <br />
                    we missed You!
                  </Text>
                  <Img
                    src="images/img_group966_1.svg"
                    className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[59%]"
                    alt="Group966"
                  />
                </Column>
              </Column>
              <Img
                src="images/img_screenshot164.png"
                className="lg:h-[308px] xl:h-[353px] 2xl:h-[397px] 3xl:h-[476px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius10 w-[43%]"
                alt="Screenshot164"
              />
            </Row>
          </Column>
        </Column>
        <Column className="items-center lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]">
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
                      src="images/img_computer_7.svg"
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
                        src="images/img_music_7.svg"
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
                  alt="iPhone12Mocku One"
                />
                <Img
                  src="images/img_iphone12pro6.png"
                  className="lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] 3xl:mr-[111px] lg:mr-[72px] xl:mr-[82px] 2xl:mr-[93px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[8%]"
                  alt="iPhone12ProSix One"
                />
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default HomepagePage;
