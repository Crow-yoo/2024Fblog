import React from "react";

const siteText = [
    {
        text: ["make", "site compliant with", "nodejs"],
        title: " Project 1 - 도서 홈페이지",
        code: "https://github.com/Crow-yoo/Bookshop.git",
        view: "https://github.com/Crow-yoo/Bookshop.git",
        info: [
            "Book Shop",
            "production period : 4 weeks",
            "use stack : 정리 필요",
        ],
    },
    {
        text: ["make", "site compliant with", "react.js"],
        title: "Project 2 - 리액트를 이용한 사이트 제작",
        code: "https://github.com/Crow-yoo/2024Fblog.git",
        view: "https://github.com/Crow-yoo/2024Fblog.git",
        info: [
            "site coding",
            "production period : 2 weeks",
            "use stack : HTML5/CSS3, CSS Variable, react",
        ],
    },
    {
        text: ["make"],
        title: "Project 3",
        code: "구현필요",
        view: "구현필요",
        info: [
            "site coding",
            "production period : 추가 필요",
            "use stack : 추가 필요",
        ],
    },
    {
        text: ["make"],
        title: "Project 4",
        code: "구현 필요",
        view: "구현 필요",
        info: [
            "site coding",
            "production period : 추가 필요",
            "use stack : 추후 예정",
        ],
    },
];

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">
                    Site Coding <em>나의 작업물</em>
                </h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                <a href={site.code}>code</a>
                                <a href={site.view}>view</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Site;