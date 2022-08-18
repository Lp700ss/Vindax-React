import React from "react";

import {
  Column,
  Stack,
  Row,
  Text,
  Input,
  Img,
  Button,
  Line,
  Slider,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const WithdrawPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-blue_50 font-inter mx-[auto] w-[100%]">
        <Stack className="3xl:h-[1189px] lg:h-[770px] xl:h-[881px] 2xl:h-[991px] w-[96%]">
          <header className="absolute right-[0] top-[2%] w-[90%]">
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
          <Row className="absolute items-center justify-center left-[10%] xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] top-[10%] w-[13%]">
            <Column className="items-center rounded-radius6 w-[32%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_401 w-[auto]">
                Deposit
              </Text>
            </Column>
            <Button
              className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[54%]"
              shape="RoundedBorder8"
              size="md"
              variant="FillIndigoA400"
            >
              Withdraw
            </Button>
          </Row>
          <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] items-center justify-end xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] rounded-radius8 shadow-bs7 w-[90%]">
            <Line className="bg-gray_300 h-[1px] lg:mt-[588px] xl:mt-[673px] 2xl:mt-[757px] 3xl:mt-[908px] w-[100%]" />
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
          <Stack className="absolute 3xl:h-[1189px] lg:h-[770px] xl:h-[881px] 2xl:h-[991px] w-[100%]">
            <Slider
              slidesToShow={2}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[1.00] absolute"
              ref={sliderRef}
              className="absolute w-[100%]"
              items={[...Array(6)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Row className="items-center justify-end overflow-auto w-[100%]">
                    <List
                      className="gap-[0] grid grid-cols-4 min-h-[auto] w-[65%]"
                      orientation="horizontal"
                    >
                      <Column className="items-center w-[100%]">
                        <Column className="bg-gray_50 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                          <Text className="font-medium mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 tracking-ls1 uppercase w-[auto]">
                            Date
                          </Text>
                        </Column>
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_903 w-[auto]">
                          18-06-2017 12:38:42
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_903 w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          18-06-2017 12:38:42
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_903 w-[auto]">
                          18-06-2017 12:38:42
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_903 w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          18-06-2017 12:38:42
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_903 w-[auto]">
                          18-06-2017 12:38:42
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_903 w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          18-06-2017 12:38:42
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_903 w-[auto]">
                          18-06-2017 12:38:42
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_903 w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          18-06-2017 12:38:42
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_903 w-[auto]">
                          18-06-2017 12:38:42
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_903 w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          18-06-2017 12:38:42
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_903 w-[auto]">
                          18-06-2017 12:38:42
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_903 w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          18-06-2017 12:38:42
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_903 w-[auto]">
                          18-06-2017 12:38:42
                        </Text>
                        <Column className="bg-gray_50 items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
                          <Text className="font-medium my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_903 w-[auto]">
                            18-06-2017 12:38:42
                          </Text>
                        </Column>
                      </Column>
                      <Line className="self-center w-[35%] lg:mr-[202px] xl:mr-[231px] 2xl:mr-[260px] 3xl:mr-[312px]" />
                      <Column className="w-[100%]">
                        <Column className="bg-gray_50 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                          <Text className="font-medium mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 tracking-ls1 uppercase w-[auto]">
                            ID
                          </Text>
                        </Column>
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          123
                        </Text>
                        <Button
                          className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          456
                        </Button>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          789
                        </Text>
                        <Button
                          className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          112
                        </Button>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          313
                        </Text>
                        <Button
                          className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          456
                        </Button>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          789
                        </Text>
                        <Button
                          className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          980
                        </Button>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          7484
                        </Text>
                        <Text className="bg-gray_50 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[76px]">
                          83939
                        </Text>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          3333
                        </Text>
                        <Text className="bg-gray_50 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[76px]">
                          12313
                        </Text>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          3535
                        </Text>
                        <Column className="bg-gray_50 items-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text className="font-normal 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                            45354
                          </Text>
                        </Column>
                      </Column>
                      <Line className="self-center w-[35%] lg:mr-[202px] xl:mr-[231px] 2xl:mr-[260px] 3xl:mr-[312px]" />
                      <Column className="items-center w-[100%]">
                        <Column className="bg-gray_50 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                          <Text className="font-medium mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 tracking-ls1 uppercase w-[auto]">
                            RID
                          </Text>
                        </Column>
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          9a24688899...099076e723
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          9a24688899...099076e723
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          9a24688899...099076e723
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          9a24688899...099076e723
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          9a24688899...099076e723
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          9a24688899...099076e723
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          9a24688899...099076e723
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          9a24688899...099076e723
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          9a24688899...099076e723
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          9a24688899...099076e723
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          9a24688899...099076e723
                        </Text>
                        <Button
                          className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          9a24688899...099076e723
                        </Button>
                        <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          9a24688899...099076e723
                        </Text>
                        <Column className="bg-gray_50 items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
                          <Text className="font-medium mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                            9a24688899...099076e723
                          </Text>
                        </Column>
                      </Column>
                      <Line className="self-center w-[35%] lg:mr-[202px] xl:mr-[231px] 2xl:mr-[260px] 3xl:mr-[312px]" />
                      <Column className="w-[100%]">
                        <Column className="bg-gray_50 items-end lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                          <Text className="font-medium mb-[1px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 tracking-ls1 uppercase w-[auto]">
                            ASSET
                          </Text>
                        </Column>
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          ETH
                        </Text>
                        <Button
                          className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          BTC
                        </Button>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          BTC
                        </Text>
                        <Button
                          className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          ETH
                        </Button>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          ETH
                        </Text>
                        <Button
                          className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          ETH
                        </Button>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          ETH
                        </Text>
                        <Button
                          className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          ETH
                        </Button>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          BTC
                        </Text>
                        <Button
                          className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          ETH
                        </Button>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          ETH
                        </Text>
                        <Button
                          className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 text-center w-[100%]"
                          size="lg"
                          variant="FillGray50"
                        >
                          ETH
                        </Button>
                        <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          ETH
                        </Text>
                        <Column className="bg-gray_50 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
                          <Text className="font-normal mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                            XRP
                          </Text>
                        </Column>
                      </Column>
                    </List>
                    <Column className="w-[88%]">
                      <Column className="bg-gray_50 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[21%]">
                        <Text className="font-medium mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 tracking-ls1 uppercase w-[auto]">
                          Amount
                        </Text>
                      </Column>
                      <Line className="bg-gray_300 h-[1px] w-[21%]" />
                      <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        4030.40
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                        wrapClassName="w-[21%]"
                        name="TablesCell"
                        placeholder="4030.40"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        4030.40
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                        wrapClassName="w-[21%]"
                        name="TablesCell One"
                        placeholder="4030.40"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        4030.40
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                        wrapClassName="w-[21%]"
                        name="TablesCell Two"
                        placeholder="4030.40"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        4030.40
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                        wrapClassName="w-[21%]"
                        name="TablesCell Three"
                        placeholder="4030.40"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        4030.40
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                        wrapClassName="w-[21%]"
                        name="TablesCell Four"
                        placeholder="4030.40"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        4030.40
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                        wrapClassName="w-[21%]"
                        name="TablesCell Five"
                        placeholder="4030.40"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                        4030.40
                      </Text>
                      <Column className="bg-gray_50 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[21%]">
                        <Text className="font-normal mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          4030.40
                        </Text>
                      </Column>
                    </Column>
                    <Column className="lg:mr-[202px] xl:mr-[231px] 2xl:mr-[260px] 3xl:mr-[312px] w-[23%]">
                      <Column className="bg-gray_50 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                        <Text className="font-medium mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 tracking-ls1 uppercase w-[auto]">
                          TXID
                        </Text>
                      </Column>
                      <Line className="bg-gray_300 h-[1px] w-[100%]" />
                      <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                        9a24688899...099076e723
                      </Text>
                      <Input
                        className="font-medium p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-blue_A700 text-blue_A700 w-[100%]"
                        wrapClassName="w-[100%]"
                        name="TablesCell Six"
                        placeholder="9a24688899...099076e723"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                        9a24688899...099076e723
                      </Text>
                      <Input
                        className="font-medium p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-blue_A700 text-blue_A700 w-[100%]"
                        wrapClassName="w-[100%]"
                        name="TablesCell Seven"
                        placeholder="9a24688899...099076e723"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                        9a24688899...099076e723
                      </Text>
                      <Input
                        className="font-medium p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-blue_A700 text-blue_A700 w-[100%]"
                        wrapClassName="w-[100%]"
                        name="TablesCell Eight"
                        placeholder="9a24688899...099076e723"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                        9a24688899...099076e723
                      </Text>
                      <Input
                        className="font-medium p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-blue_A700 text-blue_A700 w-[100%]"
                        wrapClassName="w-[100%]"
                        name="TablesCell Nine"
                        placeholder="9a24688899...099076e723"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                        9a24688899...099076e723
                      </Text>
                      <Input
                        className="font-medium p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-blue_A700 text-blue_A700 w-[100%]"
                        wrapClassName="w-[100%]"
                        name="TablesCell Ten"
                        placeholder="9a24688899...099076e723"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                        9a24688899...099076e723
                      </Text>
                      <Input
                        className="font-medium p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-blue_A700 text-blue_A700 w-[100%]"
                        wrapClassName="w-[100%]"
                        name="TablesCell Eleven"
                        placeholder="9a24688899...099076e723"
                        size="sm"
                        variant="FillGray50"
                      ></Input>
                      <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                        9a24688899...099076e723
                      </Text>
                      <Column className="bg-gray_50 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
                        <Text className="font-medium mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_A700 w-[auto]">
                          9a24688899...099076e723
                        </Text>
                      </Column>
                    </Column>
                    <Column className="w-[12%]">
                      <Column className="bg-gray_50 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                        <Text className="font-medium mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 tracking-ls1 uppercase w-[auto]">
                          Status
                        </Text>
                      </Column>
                      <Line className="bg-gray_300 h-[1px] w-[100%]" />
                      <Button
                        className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[46%]"
                        shape="RoundedBorder8"
                        size="sm"
                        variant="FillGreen50"
                      >
                        Succeed
                      </Button>
                      <Column className="bg-gray_50 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                        <Button
                          className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[59%]"
                          shape="RoundedBorder8"
                          size="sm"
                          variant="FillGreen50"
                        >
                          Succeed
                        </Button>
                      </Column>
                      <Button
                        className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[46%]"
                        shape="RoundedBorder8"
                        size="sm"
                        variant="FillGreen50"
                      >
                        Succeed
                      </Button>
                      <Column className="bg-gray_50 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                        <Button
                          className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[59%]"
                          shape="RoundedBorder8"
                          size="sm"
                          variant="FillGreen50"
                        >
                          Succeed
                        </Button>
                      </Column>
                      <Button
                        className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[49%]"
                        shape="RoundedBorder5"
                        size="sm"
                        variant="FillRed50"
                      >
                        Canceled
                      </Button>
                      <Column className="bg-gray_50 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                        <Button
                          className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[59%]"
                          shape="RoundedBorder8"
                          size="sm"
                          variant="FillGreen50"
                        >
                          Succeed
                        </Button>
                      </Column>
                      <Button
                        className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[49%]"
                        shape="RoundedBorder8"
                        size="sm"
                        variant="FillRed50"
                      >
                        Canceled
                      </Button>
                      <Column className="bg-gray_50 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                        <Button
                          className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[59%]"
                          shape="RoundedBorder8"
                          size="sm"
                          variant="FillGreen50"
                        >
                          Succeed
                        </Button>
                      </Column>
                      <Button
                        className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[49%]"
                        shape="RoundedBorder8"
                        size="sm"
                        variant="FillRed50"
                      >
                        Canceled
                      </Button>
                      <Column className="bg-gray_50 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                        <Button
                          className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[59%]"
                          shape="RoundedBorder8"
                          size="sm"
                          variant="FillGreen50"
                        >
                          Succeed
                        </Button>
                      </Column>
                      <Button
                        className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[49%]"
                        shape="RoundedBorder8"
                        size="sm"
                        variant="FillRed50"
                      >
                        Canceled
                      </Button>
                      <Column className="bg-gray_50 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                        <Button
                          className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[59%]"
                          shape="RoundedBorder8"
                          size="sm"
                          variant="FillGreen50"
                        >
                          Succeed
                        </Button>
                      </Column>
                      <Button
                        className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[49%]"
                        shape="RoundedBorder8"
                        size="sm"
                        variant="FillRed50"
                      >
                        Canceled
                      </Button>
                      <Column className="bg-gray_50 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                        <Button
                          className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[59%]"
                          shape="RoundedBorder8"
                          size="sm"
                          variant="FillGreen50"
                        >
                          Succeed
                        </Button>
                      </Column>
                    </Column>
                  </Row>
                </React.Fragment>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
            <Row className="absolute bottom-[1%] items-center justify-between right-[2%] w-[27%]">
              <Button
                className="cursor-pointer flex lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:w-[29px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
                onClick={() => sliderRef.current?.slidePrev()}
                shape="icbCustomBorderTL6"
                size="xlIcn"
                variant="icbOutlineGray300"
              >
                <Img
                  src="images/img_arrowleft_gray_903.svg"
                  className="flex items-center justify-center"
                  alt="arrowleft One"
                />
              </Button>
              <Button
                className="cursor-pointer flex lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:w-[29px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
                onClick={() => sliderRef.current?.slideNext()}
                shape="icbCustomBorderLR6"
                size="xlIcn"
                variant="icbOutlineGray300"
              >
                <Img
                  src="images/img_arrowleft_gray_903.svg"
                  className="flex items-center justify-center"
                  alt="arrowright"
                />
              </Button>
            </Row>
          </Stack>
        </Stack>
        <Column className="font-integralcf items-end lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] lg:px-[48px] xl:px-[55px] 2xl:px-[62px] 3xl:px-[74px] w-[100%]">
          <Text className="font-normal lg:mr-[291px] xl:mr-[333px] 2xl:mr-[375px] 3xl:mr-[450px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-black_900 tracking-ls1 w-[auto]">
            Trade Anywhere
          </Text>
          <Row className="font-inter items-center justify-end lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[94%]">
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
        </Column>
        <Column className="font-integralcf items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
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
                      src="images/img_computer_6.svg"
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
                        src="images/img_music_6.svg"
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

export default WithdrawPage;
