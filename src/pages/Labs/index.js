import React from "react";

import { Column, Row, Img, Stack, Text, Input, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const LabsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-blue_50 font-integralcf mx-[auto] w-[100%]">
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
                src="images/img_trophy.svg"
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
          <Column className="items-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[92%]">
            <Column className="font-inter w-[97%]">
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
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-bluegray_900 w-[auto]">
                VinDAX Labs
              </Text>
              <Text className="font-medium leading-[154.20%] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[54%]">
                VinDAX Labs is a social impact fund and an initiative to
                incubate, invest, <br />
                and empower blockchain and
                <br />
                cryptocurrency entrepreneurs, projects, and communities.
                <br />
                <br />
                Our mission is to solve the problems that matter most to the
                ecosystem and change the world for the better.
              </Text>
              <Button
                className="font-medium lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[13%]"
                shape="RoundedBorder5"
                size="md"
                variant="OutlineBlack9000c"
              >
                Apply to Launch
              </Button>
            </Column>
            <Stack className="font-inter lg:h-[448px] xl:h-[512px] 2xl:h-[576px] 3xl:h-[691px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
              <Column className="absolute bg-cyan_300 h-[max-content] inset-[0] justify-center m-[auto] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius20 w-[97%]">
                <Text className="font-normal leading-[normal] lg:ml-[463px] xl:ml-[530px] 2xl:ml-[596px] 3xl:ml-[715px] lg:mt-[59px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[50%]">
                  <span className="text-bluegray_900 font-inter font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px]">
                    What we do
                  </span>
                  <span className="text-bluegray_900 font-inter font-bold">
                    <br />
                    <br />
                  </span>
                  <span className="text-bluegray_900 font-inter">
                    <br />
                  </span>
                  <span className="text-bluegray_900 font-inter font-medium lg:text-[15px] lg:leading-[22px] xl:text-[17px] xl:leading-[25px] 2xl:text-[20px] 2xl:leading-[29px] 3xl:text-[24px] 3xl:leading-[34px]">
                    Incubate entrepreneurs and projects
                    <br />
                    <br />
                    Make direct investments
                    <br />
                    <br />
                    Collaborate with other industry partners and participate as
                    LP
                  </span>
                </Text>
                <Text className="font-normal leading-[normal] lg:mb-[56px] xl:mb-[64px] 2xl:mb-[73px] 3xl:mb-[87px] lg:ml-[464px] xl:ml-[531px] 2xl:ml-[597px] 3xl:ml-[716px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[38%]">
                  <span className="text-bluegray_900 font-inter font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px]">
                    We support entrepreneurs in
                    <br />
                  </span>
                  <span className="text-bluegray_900 font-inter">
                    <br />
                  </span>
                  <span className="text-bluegray_900 font-inter font-medium lg:text-[15px] lg:leading-[22px] xl:text-[17px] xl:leading-[25px] 2xl:text-[20px] 2xl:leading-[29px] 3xl:text-[24px] 3xl:leading-[34px]">
                    Funding
                    <br />
                    <br />
                    Go-to-market strategy & BD
                    <br />
                    <br />
                    Token Models & Distributions
                    <br />
                    <br />
                    Technical Review
                    <br />
                    <br />
                    Talent Recruiting
                  </span>
                </Text>
              </Column>
              <Stack className="absolute lg:h-[448px] xl:h-[512px] 2xl:h-[576px] 3xl:h-[691px] left-[0] w-[49%]">
                <Stack className="absolute lg:h-[448px] xl:h-[512px] 2xl:h-[576px] 3xl:h-[691px] right-[0] w-[77%]">
                  <Stack className="absolute lg:h-[361px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] inset-x-[0] mx-[auto] top-[0] w-[98%]">
                    <Stack className="absolute lg:h-[361px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] left-[0] w-[93%]">
                      <Img
                        src="images/img_group.svg"
                        className="absolute 3xl:h-[117px] lg:h-[76px] xl:h-[87px] 2xl:h-[98px] inset-y-[0] left-[5%] my-[auto] 3xl:w-[116px] lg:w-[75px] xl:w-[86px] 2xl:w-[97px]"
                        alt="Group"
                      />
                      <Stack className="absolute lg:h-[361px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] w-[100%]">
                        <Img
                          src="images/img_vector.svg"
                          className="absolute bottom-[12%] lg:h-[158px] xl:h-[180px] 2xl:h-[203px] 3xl:h-[243px] inset-x-[0] mx-[auto] w-[80%]"
                          alt="Vector"
                        />
                        <Stack className="absolute lg:h-[361px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] w-[100%]">
                          <Stack
                            className="absolute bg-cover bg-repeat bottom-[0] lg:h-[246px] xl:h-[282px] 2xl:h-[317px] 3xl:h-[380px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group_316X434.png')",
                            }}
                          >
                            <Stack className="absolute lg:h-[133px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] inset-[0] justify-center m-[auto] w-[65%]">
                              <Img
                                src="images/img_vector_89X283.png"
                                className="absolute bottom-[0] 3xl:h-[107px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] w-[100%]"
                                alt="Vector One"
                              />
                              <Img
                                src="images/img_vector_cyan_301.svg"
                                className="absolute bottom-[3%] lg:h-[128px] xl:h-[146px] 2xl:h-[165px] 3xl:h-[197px] inset-x-[0] w-[100%]"
                                alt="Vector Two"
                              />
                            </Stack>
                            <Img
                              src="images/img_vector_164X283.png"
                              className="absolute lg:h-[128px] xl:h-[146px] 2xl:h-[165px] 3xl:h-[197px] inset-x-[0] mx-[auto] top-[16%] w-[65%]"
                              alt="Vector Three"
                            />
                            <Stack
                              className="absolute bg-cover bg-repeat lg:h-[201px] xl:h-[230px] 2xl:h-[259px] 3xl:h-[310px] inset-x-[0] mx-[auto] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] top-[0] w-[77%]"
                              style={{
                                backgroundImage: "url('images/img_group2.png')",
                              }}
                            >
                              <Img
                                src="images/img_group_cyan_100.png"
                                className="absolute lg:h-[130px] xl:h-[148px] 2xl:h-[167px] 3xl:h-[200px] inset-x-[0] mx-[auto] top-[0] w-[55%]"
                                alt="Group One"
                              />
                            </Stack>
                          </Stack>
                          <Img
                            src="images/img_group_128X73.svg"
                            className="absolute lg:h-[100px] xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] inset-x-[0] mx-[auto] top-[16%] w-[17%]"
                            alt="Group Two"
                          />
                          <Img
                            src="images/img_group_238X121.svg"
                            className="absolute lg:h-[186px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] inset-x-[0] mx-[auto] top-[0] w-[28%]"
                            alt="Group Three"
                          />
                        </Stack>
                      </Stack>
                    </Stack>
                    <Img
                      src="images/img_group_180X102.svg"
                      className="absolute bottom-[17%] lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] right-[0] w-[22%]"
                      alt="Group Four"
                    />
                  </Stack>
                  <Stack className="absolute bottom-[0] lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] right-[0] w-[79%]">
                    <Stack className="absolute bottom-[0] lg:h-[189px] xl:h-[216px] 2xl:h-[243px] 3xl:h-[291px] left-[0] w-[82%]">
                      <Stack
                        className="absolute bg-cover bg-repeat bottom-[0] lg:h-[160px] xl:h-[183px] 2xl:h-[206px] 3xl:h-[247px] left-[0] lg:px-[14px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] w-[79%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group_205X244.png')",
                        }}
                      >
                        <Stack className="absolute 2xl:h-[110px] 3xl:h-[131px] lg:h-[85px] xl:h-[97px] inset-x-[0] mx-[auto] top-[0] w-[39%]">
                          <Stack
                            className="absolute bg-cover bg-repeat bottom-[0] lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group3.png')",
                            }}
                          >
                            <Img
                              src="images/img_group_cyan_100_27X45.png"
                              className="absolute lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-x-[0] mx-[auto] top-[0] w-[48%]"
                              alt="Group Five"
                            />
                          </Stack>
                          <Img
                            src="images/img_group_cyan_100_81X12.png"
                            className="absolute lg:h-[63px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[98px] inset-x-[0] mx-[auto] top-[0] w-[13%]"
                            alt="Group Six"
                          />
                        </Stack>
                        <Img
                          src="images/img_group_50X86.png"
                          className="absolute lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] inset-[0] justify-center m-[auto] w-[35%]"
                          alt="Group Seven"
                        />
                      </Stack>
                      <Stack
                        className="absolute bg-cover bg-repeat lg:h-[159px] xl:h-[182px] 2xl:h-[205px] 3xl:h-[245px] lg:px-[14px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] right-[0] top-[0] w-[79%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group_204X244.png')",
                        }}
                      >
                        <Stack className="absolute 2xl:h-[110px] 3xl:h-[131px] lg:h-[85px] xl:h-[97px] inset-x-[0] mx-[auto] top-[0] w-[39%]">
                          <Stack
                            className="absolute bg-cover bg-repeat bottom-[0] lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group3.png')",
                            }}
                          >
                            <Img
                              src="images/img_group_cyan_100_27X45.png"
                              className="absolute lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-x-[0] mx-[auto] top-[0] w-[48%]"
                              alt="Group Eight"
                            />
                          </Stack>
                          <Img
                            src="images/img_group_cyan_100_81X12.png"
                            className="absolute lg:h-[63px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[98px] inset-x-[0] mx-[auto] top-[0] w-[13%]"
                            alt="Group Nine"
                          />
                        </Stack>
                        <Img
                          src="images/img_group_50X86.png"
                          className="absolute lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] inset-[0] justify-center m-[auto] w-[35%]"
                          alt="Group Ten"
                        />
                      </Stack>
                    </Stack>
                    <Stack
                      className="absolute bg-cover bg-repeat lg:h-[160px] xl:h-[183px] 2xl:h-[206px] 3xl:h-[247px] lg:px-[14px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] right-[0] top-[0] w-[65%]"
                      style={{
                        backgroundImage: "url('images/img_group_205X245.png')",
                      }}
                    >
                      <Stack className="absolute 2xl:h-[110px] 3xl:h-[131px] lg:h-[85px] xl:h-[97px] inset-x-[0] mx-[auto] top-[0] w-[38%]">
                        <Stack
                          className="absolute bg-cover bg-repeat bottom-[0] lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group3.png')",
                          }}
                        >
                          <Img
                            src="images/img_group_cyan_100_27X45.png"
                            className="absolute lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-x-[0] mx-[auto] top-[0] w-[48%]"
                            alt="Group Eleven"
                          />
                        </Stack>
                        <Img
                          src="images/img_group_81X12.png"
                          className="absolute lg:h-[63px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[98px] inset-x-[0] mx-[auto] top-[0] w-[13%]"
                          alt="Group Twelve"
                        />
                      </Stack>
                      <Img
                        src="images/img_group_4.png"
                        className="absolute lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] inset-[0] justify-center m-[auto] w-[35%]"
                        alt="Group Thirteen"
                      />
                    </Stack>
                  </Stack>
                </Stack>
                <Stack className="absolute bottom-[7%] lg:h-[291px] xl:h-[332px] 2xl:h-[374px] 3xl:h-[448px] left-[0] w-[66%]">
                  <Stack className="absolute lg:h-[250px] xl:h-[286px] 2xl:h-[322px] 3xl:h-[386px] left-[0] top-[0] w-[80%]">
                    <Stack className="absolute lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] left-[0] top-[0] w-[75%]">
                      <Img
                        src="images/img_vector_cyan_100.svg"
                        className="absolute bottom-[26%] lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] inset-x-[0] mx-[auto] w-[42%]"
                        alt="Vector Four"
                      />
                      <Stack className="absolute lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] w-[100%]">
                        <Stack className="absolute bottom-[0] lg:h-[189px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[292px] w-[100%]">
                          <Stack className="absolute bottom-[0] lg:h-[174px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
                            <Stack
                              className="absolute bg-cover bg-repeat bottom-[0] lg:h-[158px] xl:h-[181px] 2xl:h-[204px] 3xl:h-[244px] lg:px-[47px] xl:px-[54px] 2xl:px-[61px] 3xl:px-[73px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_203X242.png')",
                              }}
                            >
                              <Img
                                src="images/img_group_cyan_100_64X91.png"
                                className="absolute lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] inset-x-[0] mx-[auto] top-[0] w-[38%]"
                                alt="Group Fourteen"
                              />
                            </Stack>
                            <Stack
                              className="absolute bg-cover bg-repeat lg:h-[159px] xl:h-[182px] 2xl:h-[205px] 3xl:h-[245px] lg:px-[48px] xl:px-[55px] 2xl:px-[62px] 3xl:px-[74px] top-[0] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_204X242.png')",
                              }}
                            >
                              <Img
                                src="images/img_group_cyan_100_64X91.png"
                                className="absolute lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] inset-x-[0] mx-[auto] top-[0] w-[38%]"
                                alt="Group Fifteen"
                              />
                            </Stack>
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-repeat items-center lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] top-[0] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group_5.png')",
                            }}
                          >
                            <Column
                              className="bg-cover bg-repeat items-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[77%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_cyan_100_64X91.png')",
                              }}
                            >
                              <Stack
                                className="bg-cover bg-repeat lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] px-[3px] w-[69%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group8.png')",
                                }}
                              >
                                <Img
                                  src="images/img_group_22X32.png"
                                  className="absolute bottom-[0] lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] inset-x-[0] mx-[auto] w-[71%]"
                                  alt="Group Sixteen"
                                />
                              </Stack>
                            </Column>
                          </Column>
                        </Stack>
                        <Stack
                          className="absolute bg-cover bg-repeat xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] inset-x-[0] mx-[auto] px-[1px] top-[0] w-[6%]"
                          style={{
                            backgroundImage: "url('images/img_group6.png')",
                          }}
                        >
                          <Img
                            src="images/img_info.svg"
                            className="absolute bottom-[15%] lg:h-[58px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] inset-x-[0] mx-[auto] w-[73%]"
                            alt="info"
                          />
                        </Stack>
                      </Stack>
                    </Stack>
                    <Stack className="absolute bottom-[0] lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] right-[0] w-[75%]">
                      <Img
                        src="images/img_vector_cyan_100.svg"
                        className="absolute bottom-[26%] lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] inset-x-[0] mx-[auto] w-[42%]"
                        alt="Vector Five"
                      />
                      <Stack className="absolute lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] w-[100%]">
                        <Stack className="absolute bottom-[0] lg:h-[189px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[292px] w-[100%]">
                          <Stack className="absolute bottom-[0] lg:h-[174px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
                            <Stack
                              className="absolute bg-cover bg-repeat bottom-[0] lg:h-[158px] xl:h-[181px] 2xl:h-[204px] 3xl:h-[244px] lg:px-[47px] xl:px-[54px] 2xl:px-[61px] 3xl:px-[73px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_7.png')",
                              }}
                            >
                              <Img
                                src="images/img_group_cyan_100_64X91.png"
                                className="absolute lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] inset-x-[0] mx-[auto] top-[0] w-[38%]"
                                alt="Group Seventeen"
                              />
                            </Stack>
                            <Stack
                              className="absolute bg-cover bg-repeat lg:h-[159px] xl:h-[182px] 2xl:h-[205px] 3xl:h-[245px] lg:px-[48px] xl:px-[55px] 2xl:px-[62px] 3xl:px-[74px] top-[0] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_9.png')",
                              }}
                            >
                              <Img
                                src="images/img_group_cyan_100_64X91.png"
                                className="absolute lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] inset-x-[0] mx-[auto] top-[0] w-[38%]"
                                alt="Group Eighteen"
                              />
                            </Stack>
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-repeat items-center lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] top-[0] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group_10.png')",
                            }}
                          >
                            <Column
                              className="bg-cover bg-repeat items-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[77%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_cyan_100_64X91.png')",
                              }}
                            >
                              <Stack
                                className="bg-cover bg-repeat lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] px-[3px] w-[69%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group8.png')",
                                }}
                              >
                                <Img
                                  src="images/img_group_22X32.png"
                                  className="absolute bottom-[0] lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] inset-x-[0] mx-[auto] w-[71%]"
                                  alt="Group Nineteen"
                                />
                              </Stack>
                            </Column>
                          </Column>
                        </Stack>
                        <Stack
                          className="absolute bg-cover bg-repeat xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] inset-x-[0] mx-[auto] px-[1px] top-[0] w-[6%]"
                          style={{
                            backgroundImage: "url('images/img_group6.png')",
                          }}
                        >
                          <Img
                            src="images/img_group_74X11.svg"
                            className="absolute bottom-[6%] lg:h-[58px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] inset-x-[0] mx-[auto] w-[73%]"
                            alt="Group Twenty"
                          />
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack className="absolute bottom-[0] lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] right-[0] w-[59%]">
                    <Img
                      src="images/img_vector_cyan_100.svg"
                      className="absolute bottom-[26%] lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] inset-x-[0] mx-[auto] w-[42%]"
                      alt="Vector Six"
                    />
                    <Stack className="absolute lg:h-[215px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] w-[100%]">
                      <Stack className="absolute bottom-[0] lg:h-[189px] xl:h-[217px] 2xl:h-[244px] 3xl:h-[292px] w-[100%]">
                        <Stack className="absolute bottom-[0] lg:h-[174px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
                          <Stack
                            className="absolute bg-cover bg-repeat bottom-[0] lg:h-[159px] xl:h-[182px] 2xl:h-[205px] 3xl:h-[245px] lg:px-[48px] xl:px-[55px] 2xl:px-[62px] 3xl:px-[74px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group_11.png')",
                            }}
                          >
                            <Img
                              src="images/img_group_cyan_100_64X91.png"
                              className="absolute lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] inset-x-[0] mx-[auto] top-[0] w-[38%]"
                              alt="Group TwentyOne"
                            />
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat lg:h-[158px] xl:h-[181px] 2xl:h-[204px] 3xl:h-[244px] lg:px-[48px] xl:px-[55px] 2xl:px-[62px] 3xl:px-[74px] top-[0] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group_12.png')",
                            }}
                          >
                            <Img
                              src="images/img_group_cyan_100_64X91.png"
                              className="absolute lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] inset-x-[0] mx-[auto] top-[0] w-[38%]"
                              alt="Group TwentyTwo"
                            />
                          </Stack>
                        </Stack>
                        <Column
                          className="absolute bg-cover bg-repeat items-center lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] top-[0] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group_13.png')",
                          }}
                        >
                          <Stack
                            className="bg-cover bg-repeat lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:px-[10px] xl:px-[11px] 2xl:px-[13px] 3xl:px-[15px] w-[77%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group_cyan_100_64X91.png')",
                            }}
                          >
                            <Img
                              src="images/img_group8.png"
                              className="absolute lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-x-[0] mx-[auto] top-[0] w-[49%]"
                              alt="arrowup"
                            />
                            <Img
                              src="images/img_group_22X32.png"
                              className="absolute lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] inset-x-[0] mx-[auto] top-[5%] w-[35%]"
                              alt="Group TwentyThree"
                            />
                          </Stack>
                        </Column>
                      </Stack>
                      <Stack
                        className="absolute bg-cover bg-repeat xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] inset-x-[0] mx-[auto] px-[1px] top-[0] w-[6%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group12_125X15.png')",
                        }}
                      >
                        <Img
                          src="images/img_group_1.svg"
                          className="absolute bottom-[6%] lg:h-[58px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] inset-x-[0] mx-[auto] w-[73%]"
                          alt="Group TwentyFour"
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Text className="font-integralcf font-normal lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-black_900 tracking-ls1 w-[auto]">
              Trade Anywhere
            </Text>
            <Row className="font-inter items-center lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[97%]">
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
        </Row>
        <Column className="items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
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
                      src="images/img_computer.svg"
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
                      alt="Group TwentyFive"
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
                        src="images/img_music.svg"
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

export default LabsPage;
