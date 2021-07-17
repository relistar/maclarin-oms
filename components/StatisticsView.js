import styled from "@emotion/styled";

const StatisticsHeadingStyled = styled.div`
  font-size: ${props => props.theme.fontSizes.p13};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.green};
  margin: 14px 0;
`

const StatisticsInfoPeriodStyled = styled.div`
  font-size: ${props => props.theme.fontSizes.p13};
  color: ${props => props.theme.colors.black40};
  margin-bottom: 3px;
  text-align: center;
`

const StatisticsInfoTotalStyled = styled.div`
  font-size: ${props => props.theme.fontSizes.p13};
  color: ${props => props.theme.colors.green};
  text-align: center;
`

export function StatisticsHeading({children}) {
    return (
        <StatisticsHeadingStyled>{children}</StatisticsHeadingStyled>
    )
}

export function StatisticsInfoPeriod({children}) {
    return (
        <StatisticsInfoPeriodStyled>{children}</StatisticsInfoPeriodStyled>
    )
}

export function StatisticsInfoTotal({children}) {
    return (
        <StatisticsInfoTotalStyled>{children}</StatisticsInfoTotalStyled>
    )
}