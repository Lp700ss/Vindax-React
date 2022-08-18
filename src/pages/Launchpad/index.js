import React from "react";

import { Column, Row, Img, Stack, Text, Input, Button, Grid } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const LaunchpadPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-blue_50 font-inter mx-[auto] w-[100%]">
        <Row className="items-center w-[96%]">
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
                src="images/img_trophy_6.svg"
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
          <div className="bg-bluegray_100 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[4%]"></div>
          <Column className="items-center lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]">
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
            <Row className="items-end justify-evenly lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
              <Column className="w-[87%]">
                <Text className="font-normal lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-bluegray_900 w-[auto]">
                  VinDAX Launchpad
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                  A token launch platform for transformative projects
                </Text>
              </Column>
              <Button
                className="font-medium mb-[4px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[13%]"
                shape="RoundedBorder5"
                size="md"
                variant="OutlineBlack9000c"
              >
                Apply to Launch
              </Button>
            </Row>
            <Grid className="lg:gap-[34px] xl:gap-[39px] 2xl:gap-[44px] 3xl:gap-[52px] grid grid-cols-3 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 One"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive One"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 Two"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive Two"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 Three"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive Three"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 Four"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive Four"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 Five"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive Five"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 Six"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive Six"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 Seven"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive Seven"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 Eight"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive Eight"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 Nine"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive Nine"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 Ten"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive Ten"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
                <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                  <Img
                    src="images/img_rectangle4224.png"
                    className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                    alt="Rectangle4224 Eleven"
                  />
                  <Img
                    src="images/img_ellipse55.png"
                    className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="EllipseFiftyFive Eleven"
                  />
                  <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                    GPAY - ETH Session
                  </Text>
                </Stack>
                <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      SESSION SUPPLY
                    </Text>
                    <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      START TIME
                    </Text>
                  </Row>
                  <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      700,000 GPAY
                    </Text>
                    <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                      2022-08-11 12:30:00
                    </Text>
                  </Row>
                  <Button
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillGray101"
                  >
                    Opening
                  </Button>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Row>
        <Column className="items-end lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:px-[47px] xl:px-[54px] 2xl:px-[61px] 3xl:px-[73px] w-[100%]">
          <Grid className="lg:gap-[34px] xl:gap-[39px] 2xl:gap-[44px] 3xl:gap-[52px] grid grid-cols-3 w-[94%]">
            <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
              <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                <Img
                  src="images/img_rectangle4224.png"
                  className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                  alt="Rectangle4224 Twelve"
                />
                <Img
                  src="images/img_ellipse55.png"
                  className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                  alt="EllipseFiftyFive Twelve"
                />
                <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                  GPAY - ETH Session
                </Text>
              </Stack>
              <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    SESSION SUPPLY
                  </Text>
                  <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    START TIME
                  </Text>
                </Row>
                <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    700,000 GPAY
                  </Text>
                  <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    2022-08-11 12:30:00
                  </Text>
                </Row>
                <Button
                  className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillGray101"
                >
                  Opening
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
              <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                <Img
                  src="images/img_rectangle4224.png"
                  className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                  alt="Rectangle4224 Thirteen"
                />
                <Img
                  src="images/img_ellipse55.png"
                  className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                  alt="EllipseFiftyFive Thirteen"
                />
                <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                  GPAY - ETH Session
                </Text>
              </Stack>
              <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    SESSION SUPPLY
                  </Text>
                  <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    START TIME
                  </Text>
                </Row>
                <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    700,000 GPAY
                  </Text>
                  <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    2022-08-11 12:30:00
                  </Text>
                </Row>
                <Button
                  className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillGray101"
                >
                  Opening
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
              <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                <Img
                  src="images/img_rectangle4224.png"
                  className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                  alt="Rectangle4224 Fourteen"
                />
                <Img
                  src="images/img_ellipse55.png"
                  className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                  alt="EllipseFiftyFive Fourteen"
                />
                <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                  GPAY - ETH Session
                </Text>
              </Stack>
              <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    SESSION SUPPLY
                  </Text>
                  <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    START TIME
                  </Text>
                </Row>
                <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    700,000 GPAY
                  </Text>
                  <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    2022-08-11 12:30:00
                  </Text>
                </Row>
                <Button
                  className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillGray101"
                >
                  Opening
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
              <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                <Img
                  src="images/img_rectangle4224.png"
                  className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                  alt="Rectangle4224 Fifteen"
                />
                <Img
                  src="images/img_ellipse55.png"
                  className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                  alt="EllipseFiftyFive Fifteen"
                />
                <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                  GPAY - ETH Session
                </Text>
              </Stack>
              <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    SESSION SUPPLY
                  </Text>
                  <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    START TIME
                  </Text>
                </Row>
                <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    700,000 GPAY
                  </Text>
                  <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    2022-08-11 12:30:00
                  </Text>
                </Row>
                <Button
                  className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillGray101"
                >
                  Opening
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
              <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                <Img
                  src="images/img_rectangle4224.png"
                  className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                  alt="Rectangle4224 Sixteen"
                />
                <Img
                  src="images/img_ellipse55.png"
                  className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                  alt="EllipseFiftyFive Sixteen"
                />
                <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                  GPAY - ETH Session
                </Text>
              </Stack>
              <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    SESSION SUPPLY
                  </Text>
                  <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    START TIME
                  </Text>
                </Row>
                <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    700,000 GPAY
                  </Text>
                  <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    2022-08-11 12:30:00
                  </Text>
                </Row>
                <Button
                  className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillGray101"
                >
                  Opening
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center lg:pb-[27px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] rounded-radius10 w-[100%]">
              <Stack className="lg:h-[191px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] w-[100%]">
                <Img
                  src="images/img_rectangle4224.png"
                  className="absolute lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-[100%]"
                  alt="Rectangle4224 Seventeen"
                />
                <Img
                  src="images/img_ellipse55.png"
                  className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[5%] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                  alt="EllipseFiftyFive Seventeen"
                />
                <Text className="absolute bottom-[6%] font-bold right-[14%] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                  GPAY - ETH Session
                </Text>
              </Stack>
              <Column className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    SESSION SUPPLY
                  </Text>
                  <Text className="font-normal mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                    START TIME
                  </Text>
                </Row>
                <Row className="justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    700,000 GPAY
                  </Text>
                  <Text className="font-normal mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    2022-08-11 12:30:00
                  </Text>
                </Row>
                <Button
                  className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillGray101"
                >
                  Opening
                </Button>
              </Column>
            </Column>
          </Grid>
          <Row className="bg-blue_100 justify-end mr-[1px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:p-[28px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius16 w-[94%]">
            <Column className="lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] w-[55%]">
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
                  src="images/img_group966_32X296.svg"
                  className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[59%]"
                  alt="Group966"
                />
              </Column>
            </Column>
            <Img
              src="images/img_screenshot164.png"
              className="lg:h-[308px] xl:h-[353px] 2xl:h-[397px] 3xl:h-[476px] mr-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius10 w-[43%]"
              alt="Screenshot164"
            />
          </Row>
        </Column>
        <Column className="font-integralcf items-center lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
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
                      src="images/img_computer_5.svg"
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
                        src="images/img_music_5.svg"
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
                  className="lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] 3xl:mr-[111px] lg:mr-[72px] xl:mr-[82px] 2xl:mr-[93px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[8%]"
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

export default LaunchpadPage;
