import React from "react";

const skillText = [
    {
        title: "꿈을 설계하고 디자인하다.",
        desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 상상력을 구현하는 것을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩의 엄청난 매력이라고 생각한다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 발전하고 싶다."
    },
    {
        title: "진로 변경.",
        desc: "추가 팔요"
    },
    {
        title: "정진",
        desc: "추가 필요"
    }
]

const Skill = () => {
    return (
        <section id="skill">
            <div className="slkll__inner">
                <h2 className="skill__title">
                    challenge <em>나의 도전</em>
                </h2>
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <span>{key+1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill