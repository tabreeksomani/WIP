<template>
    <div class="who-we-are-section">
        <div class="heading">
            <h2 class="section-title">Who We Are</h2>
        </div>
        <div class="content">
            <div class="text">
                <h4 class="sub-heading">Our Mission</h4>
                <p class="paragraph">
                    At The WIP Initiative, we are on a powerful mission to inspire and uplift women on their journeys to
                    achieving their
                    full potential. We are dedicated to breaking down systemic and internal barriers that have hindered the
                    progress of women for far too long.


                </p>
                <h4 class="sub-heading">Our Values</h4>
                <ul class="values-list">
                    <li>Inspiration: Motivating and encouraging women to overcome obstacles, set ambitious goals, and pursue
                        their passions. </li>
                    <li>Empowerment: Providing women with the tools, resources, and support they need to realize their full
                        potential.</li>
                    <li>Collaboration: fostering an inclusive and supportive environment, encouraging women to work
                        together, share knowledge and experiences, and build strong networks. </li>
                </ul>
                <h4 class="sub-heading">Our Vision:</h4>
                <p class="paragraph">
                    <!-- Through our diverse and inclusive community, we aim to foster an environment that
                    celebrates women's achievements and encourages collaboration, mentorship, and skill development. By
                    breaking down societal barriers and promoting gender equality, we envision a world where women have
                    equal opportunities to lead and contribute to positive change on a global scale. Through our advocacy,
                    education, and empowerment initiatives, we strive to create a lasting legacy of empowered women who
                    inspire, innovate, and drive progress in all spheres of life. -->
                    To Empower the Next Generation of Women Leaders.




                </p>
                <div class="buttons">
                    <a href="/about#our-story" class="cta-button">Our Story</a>
                    <a href="/about#our-team" class="cta-button">Our Team</a>
                </div>
            </div>
            <div class="image">
                <img src="/girlboss.png" alt="Who We Are Image" class="who-we-are-image" />
            </div>
        </div>
    </div>
</template>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.who-we-are-section {
    padding: 40px;
    background-color: #DEFFFC;
}

.heading {
    margin-bottom: 20px;
}

.section-title {
    font-family: 'Montserrat', sans-serif;
    color: #A30B37;
    font-weight: bold;
    font-size: 40px !important;
    margin-bottom: 0;
}

.sub-heading {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 18px;
    margin-top: 20px;
}

.content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
}

.text {
    width: 50%;
}

.paragraph {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
}

.values-list {
    margin-top: 10px;
    padding-left: 20px;
}

.values-list li {
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
}

.buttons {
    margin-top: 30px;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    border-radius: 4px;
    margin-right: 10px;
}


.cta-button {
    display: inline-block;
    margin-top: 10px;
    margin-right: 10px;
    padding: 8px 16px;
    background-color: #A30B37;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #2E4052;
}

.image {
    width: 50%;
    display: flex;
    justify-content: center;
}

.who-we-are-image {
    max-height: 400px;
    max-width: auto;
}
</style>