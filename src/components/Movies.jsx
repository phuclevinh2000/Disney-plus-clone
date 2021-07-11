import React from 'react'
import styled from 'styled-components'

const Movies = () => {
    return (
        <Container>
            <h4>Recommened for you</h4>
            <Content>
                <Wrap>
                    <img src="https://thestreamable.com/media/pages/news/when-will-black-widow-be-free-for-disney-plus-subscribers/3b60a2b175-1625582541/black-widow-2020-768x432.jpg" alt="#" />
                </Wrap>
                <Wrap>
                    <img src="https://thestreamable.com/media/pages/news/when-will-black-widow-be-free-for-disney-plus-subscribers/3b60a2b175-1625582541/black-widow-2020-768x432.jpg" alt="#" />
                </Wrap>
                <Wrap>
                    <img src="https://thestreamable.com/media/pages/news/when-will-black-widow-be-free-for-disney-plus-subscribers/3b60a2b175-1625582541/black-widow-2020-768x432.jpg" alt="#" />
                </Wrap>
                <Wrap>
                    <img src="https://thestreamable.com/media/pages/news/when-will-black-widow-be-free-for-disney-plus-subscribers/3b60a2b175-1625582541/black-widow-2020-768x432.jpg" alt="#" />
                </Wrap>
                <Wrap>
                    <img src="https://thestreamable.com/media/pages/news/when-will-black-widow-be-free-for-disney-plus-subscribers/3b60a2b175-1625582541/black-widow-2020-768x432.jpg" alt="#" />
                </Wrap>
                <Wrap>
                    <img src="https://thestreamable.com/media/pages/news/when-will-black-widow-be-free-for-disney-plus-subscribers/3b60a2b175-1625582541/black-widow-2020-768x432.jpg" alt="#" />
                </Wrap>
                <Wrap>
                    <img src="https://thestreamable.com/media/pages/news/when-will-black-widow-be-free-for-disney-plus-subscribers/3b60a2b175-1625582541/black-widow-2020-768x432.jpg" alt="#" />
                </Wrap>
                <Wrap>
                    <img src="https://thestreamable.com/media/pages/news/when-will-black-widow-be-free-for-disney-plus-subscribers/3b60a2b175-1625582541/black-widow-2020-768x432.jpg" alt="#" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    color: rgb(249, 249, 249);
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));;
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 73%) 0px 30px 22px -10px; 
    }
`