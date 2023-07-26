<template>
    <div class="who-we-are-section">
        <div class="heading">
            <h2 class="section-title">Who We Are</h2>
        </div>
        <div class="content">
            <div class="text">
                <h4 class="sub-heading">Our Mission</h4>
                <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    consectetur massa nec enim pulvinar ullamcorper. Suspendisse et magna
                    sit amet turpis rutrum lacinia. Sed id lacus a elit iaculis rhoncus.
                </p>
                <h4 class="sub-heading">Our Values</h4>
                <ul class="values-list">
                    <li>Value 1: Lorem ipsum dolor sit amet</li>
                    <li>Value 2: Consectetur adipiscing elit</li>
                    <li>Value 3: Aenean consectetur massa nec enim pulvinar</li>
                </ul>
                <h4 class="sub-heading">Our Vision</h4>
                <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    consectetur massa nec enim pulvinar ullamcorper. Suspendisse et magna
                    sit amet turpis rutrum lacinia. Sed id lacus a elit iaculis rhoncus.
                </p>
                <div class="buttons">
                    <a href="/about#our-story" class="btn">Our Story</a>
                    <a href="/about#our-team" class="btn">Our Team</a>
                </div>
            </div>
            <div class="image">
                <img src="/girlboss.png" alt="Who We Are Image" class="who-we-are-image" />
            </div>
        </div>
    </div>
</template>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.who-we-are-section {
    padding: 40px;
    background-color: #f7f7f7;
}

.heading {
    margin-bottom: 40px;
}

.section-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 40px;
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