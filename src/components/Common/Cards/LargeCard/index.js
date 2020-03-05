import React from "react"
import TagContainer from "../../TagContainer"
import "./largeCard.css"
import styled from "styled-components"
import Img from "gatsby-image"
const Container = styled.div`
  max-width: 350px;
  width: calc(100% - 1em);
  margin: 0.5em;
  a {
    text-decoration: none;
    color: inherit;
  }
  .massage-card {
    width: 100%;
    height: 100%;
    padding: 0em;
    position: relative;
    justify-content: unset;
    margin: 0;
  }
  .card-img {
    width: 100%;
    height: 160px;
  }
  .minutes {
    position: absolute;
    top: 137px;
    right: 10px;
    background: #fff;
    border-radius: 130px;
    box-shadow: 0 4px 14px -4px rgba(0, 0, 0, 0.08);
    padding: 7px 15px;
  }
  .minutes-p {
    font-size: 14px;
    margin: 0;
    font-weight: 600;
    text-align: center;
    line-height: 1em;
  }
  .minutes-p-2 {
    color: #828585;
    font-size: 12px;
  }
  .card-info-content {
    align-items: unset;
    padding: 10px 15px;
  }
  .card-name {
    font-size: 17px;
    margin-top: 0.5em;
    font-weight: 600;
  }
  .location {
    font-size: 13px;
    color: #828585;
    line-height: 1.6em;
    margin: 0;
  }
  svg{
    margin-right:0.1em; 
    margin-left: -0.25em; 
    fill: #828585;
  }
  .book-btn{
    margin-top: 1.7em;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    padding: 9px 32px;
    border: none;
    outline: none;
    font-size: 15px;
    font-weight: 600;
    border-radius: 4px;
    background: #23E6A8;
    transition: all 0.5s;
    color: #fff;
    &:hover{
      background: #6fefc6;
    }
  }
  @media only screen and (max-width: 665px) {
    margin: 0.5em auto;
  } 

`
const LargeCard = ({
  client: { website, name, address, massageTypes, mainImage },
}) => {
  return (
    <Container>
      <div className="massage-card" >
        <Img fluid={mainImage.fluid} className="card-img" />
        <div class="minutes">
          <p class="minutes-p minutes-p-1">60 – 90</p>
          <p class="minutes-p minutes-p-2">min</p>
        </div>
        <div className="card-info-content">
          <p className="card-name">{name}</p>
          <p className="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            <span>{address ? address : "Bristol, UK"}</span>
            </p>
          <TagContainer type="client" massageTypes={massageTypes} />
          <button className="book-btn">
              <a rel="nofollow"
                 target="_blank"  
                 href={`${website}?utm_source=massagesbristol&utm_medium=display&utm_campaign=Premium%20Slot%20Promotion`}
              >
                Book Now
            </a>
          </button>
        </div>
      </div>
    </Container>
  )
}

LargeCard.defaultProps = {}

export default LargeCard
