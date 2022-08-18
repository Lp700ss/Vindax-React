import React from "react";

import { Column, Row, Img, Text } from "components";

const OnePage = () => {
  return (
    <>
      <Column className="bg-blue_100 font-inter items-center mx-[auto] lg:p-[32px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] w-[100%]">
        <Row className="items-center lg:mb-[23px] xl:mb-[27px] 2xl:mb-[30px] 3xl:mb-[36px] w-[96%]">
          <Column className="w-[56%]">
            <Img
              src="images/img_socialmediain.png"
              className="lg:h-[258px] xl:h-[295px] 2xl:h-[332px] 3xl:h-[399px] lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] rounded-radius32 w-[70%]"
              alt="socialmediain"
            />
            <Column className="lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] w-[78%]">
              <Text className="font-normal lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-bluegray_900 w-[auto]">
                Community & Customer Service
                <br />
              </Text>
              <Text className="font-medium leading-[normal] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-bluegray_900 w-[87%]">
                Welcome back to the VinDAX communication,
                <br />
                we missed You!
              </Text>
              <Img
                src="images/img_group966.svg"
                className="lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] ml-[1px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[60%]"
                alt="Group966"
              />
            </Column>
          </Column>
          <Img
            src="images/img_screenshot164.png"
            className="lg:h-[351px] xl:h-[402px] 2xl:h-[452px] 3xl:h-[542px] rounded-radius10 w-[44%]"
            alt="Screenshot164"
          />
        </Row>
      </Column>
    </>
  );
};

export default OnePage;
