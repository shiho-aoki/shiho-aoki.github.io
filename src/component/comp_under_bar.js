import React from 'react';

class UnderBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    };
    render() {
        return(
            <div className="underbar">
                <div className="external-link">
                    <a class="github-button" 
                        href="https://github.com/shiho-aoki" 
                        target="blank" 
                        data-style="mega" 
                        data-count-href="/shiho-aoki/followers" 
                        data-count-api="/users/shiho-aoki#followers">
                            Follow@shiho-aoki
                    </a>
                </div>

                <div className="interanl-link">
                    <a href="/about">About</a>
                    <a href="/work">Work</a>
                    <a href="/bolg">Blog</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        )
    };
}

export default UnderBar;