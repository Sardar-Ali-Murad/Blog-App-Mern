import React from "react";
import "./index.css";
import Img1 from "../../assets/singleBlog1.png";
import Img2 from "../../assets/singleBlog2.png";
import Add from "../CommonComponents/Add";

const BlogContent = () => {
  return (
    <div className="blogContentMain">
      <h1 className="blogContentHeading">
        2022: The year that changed the way we work
      </h1>
      <p>
        Remember 2020? So many of us thought that was going to be the big one
        for the way we work. I thought it would be the year that changes
        productivity forever. And in many ways it was; it forced us to spring
        clean our dusty attic of beliefs about what makes people productive.
        Decades of in-office 9-to-6 culture blown out of the window! It was a
        year that showed us just how resilient the human spirit is and how
        robust our ability is to get things done. The big discovery that year
        was how little productivity could change if we put our minds to it.
      </p>
      <p>
        And that’s how 2022 snuck up on us. You might not have seen the flash of
        lightning if you weren’t looking out of your window… 2023 is when you’ll
        hear the boom. That’s when the thunderclap will be too loud to ignore.
      </p>
      <img src={Img1} />
      <div className="blogAdd">
        <Add />
      </div>
      <p>
        I usually write about data science and AI from the point of view of
        leaders and professionals who use data as raw materials for solutions.
        But from the perspective of everyone else, many of those solutions
        simply looked like a slightly smoother or more efficient application.
        The mathy old guard would casually poke fun at all the funding-grubbing
        neophytes who felt the need to tell everyone their solutions were
        “AI-fueled” when it really shouldn’t matter. Does it work x% better than
        the traditional solution? Great. That’s pretty much all anyone needed to
        know about it.
      </p>
      <p>
        And that’s how 2022 snuck up on us. You might not have seen the flash of
        lightning if you weren’t looking out of your window… 2023 is when you’ll
        hear the boom. That’s when the thunderclap will be too loud to ignore.
      </p>
      <p>
        to use. They’re not here to solve your specific problem using your
        specific data, they’re making solutions possible—theoretically. Before
        2015, almost every AI course out there was focused on research AI. After
        many years of study (not just one course!), students who got all the way
        up to a graduate degree learned how to push the envelope on the kinds of
        problems that might be solved with AI, whether or not it was feasible to
        actually use these solutions in a business setting.
      </p>
      <img src={Img2} />
      <p>
        , supplementing traditional software engineering to automate a wider
        range of tasks. But from an outsider’s perspective, not all that much
        was different. As unsexy as it is when it’s spelled out, what everyone
        in tech was excited about was that programmers could now tackle a wider
        variety of tasks more effectively.
      </p>
      <p>
        And if you were skilled at applied AI engineering, you could automate
        all kinds of things in your personal life too, giving yourself an
        incredible jetpack of personal productivity. Which is exactly the same
        story that traditional software engineers tell about all the ways they
        made their own lives better by applying a bit of code here and there.
      </p>
      <div className="blogAdd">
        <Add />
      </div>
    </div>
  );
};

export default BlogContent;
