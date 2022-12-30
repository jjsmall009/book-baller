// About page
import img from "../assets/write mana.jpg";

const About = () => {
    return (
        <main className="container page about-page">
            <img src={img} alt="writing man image" className="about-img" />
            <div className="about-content">
                <h1>The Story of Book Baller</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam neque nisi, malesuada a scelerisque ut, facilisis
                    vel mauris. Nullam porta arcu sed pretium vulputate. Nam in
                    tempus neque, eu imperdiet ipsum. Nulla ut laoreet eros.
                    Curabitur suscipit auctor ipsum vitae molestie. Aliquam eu
                    nisl quis lorem eleifend imperdiet. Nam tempus leo et tempus
                    hendrerit. Cras faucibus gravida placerat. Phasellus eu
                    mauris pretium, ornare urna in, suscipit purus. Vivamus
                    tincidunt suscipit ex quis tempor. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    curae; Duis nec ante sit amet ligula malesuada convallis et
                    eget mi. Integer imperdiet, ante vel gravida vestibulum,
                    nisi tellus tempor odio, sed maximus mi elit sed urna.
                </p>
                <p>
                    Duis cursus nec massa scelerisque hendrerit. Donec quis
                    malesuada elit, sed consectetur neque. Integer quis rhoncus
                    magna, non blandit sapien. Nam quis convallis ipsum, at
                    lacinia orci. Phasellus tincidunt dictum enim, quis maximus
                    lorem fringilla vel. Curabitur nunc erat, mattis quis
                    pellentesque sed, tempus vel urna. Donec mattis tincidunt
                    arcu, vel pulvinar ligula varius ut. Aliquam fermentum sed
                    massa sit amet posuere. Praesent at facilisis urna.
                </p>

                <h3>Why Books Rock</h3>
                <p>
                    Vivamus non urna id risus lobortis dignissim ut ac odio.
                    Phasellus sed arcu in massa pellentesque pulvinar sit amet
                    vel ante. Duis venenatis dui vitae vulputate gravida. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Fusce imperdiet libero
                    mauris, sit amet vulputate libero sagittis id. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Quisque porttitor lorem a ex elementum
                    dignissim. Duis eleifend ex ac porta mollis. Sed placerat
                    nisl et ante porttitor placerat.
                </p>

                <h3>What is a Book?</h3>
                <p>
                    Fusce imperdiet libero mauris, sit amet vulputate libero
                    sagittis id. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Quisque porttitor
                    lorem a ex elementum dignissim. Duis eleifend ex ac porta
                    mollis. Sed placerat nisl et ante porttitor placerat.
                </p>
            </div>
        </main>
    );
};

export default About;
