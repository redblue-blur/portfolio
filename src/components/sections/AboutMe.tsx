
export const AboutMe = () => {
    return (
        <section id="about" className="about section is-medium">
            <div className="about-container container">
                <h1 className="title">About</h1>
                <div className="columns">
                    <div className="column is-2">
                        <a href="https://github.com/redblue-blur" target="_blank" className="button btn-alt">GitHub</a>
                        <a href="https://twitter.com/Shetty_Pradyum" target="_blank" className="button btn-alt">Twitter</a>
                        <a href="mailto:pradyumshetty@gmail.com" className="button btn-alt">
                            Email Me
                        </a>
                    </div>
                    <div className="column is-8">
                        <div className="content">
                            <p>
                                Hello! I am a Indian senior high school student and a self-taught full-stack developer.<br/>
                                My real name is <span className="blue-text">"Enter name here"</span> but I prefer the name <span className="blue-text">"Enter name here"</span> on the internet.
                                <br/><br/>
                                I have been programming for about <span className="blue-text">4 years</span> now.<br/>
                                <span>Here is my current tech-stack.</span>      
                                <div className="columns is-multiline tech-stack" style={{ marginTop: "1%", flexWrap: "wrap", display: "flex" }}>
                                    <div className="column is-4">
                                        <div className="box">
                                            <svg viewBox="0 0 128 128">
                                                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
                                            </svg>
                                            <span>TypeScript</span>
                                        </div>
                                    </div>
                                    <div className="column is-4">
                                        <div className="box">
                                            <svg viewBox="0 0 128 128">
                                                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                                            </svg>
                                            <span>JavaScript</span>
                                        </div>
                                    </div>
                                    <div className="column is-4">
                                        <div className="box">
                                            <svg viewBox="0 0 128 128">
                                                <style></style><path fill="navy" d="M127.3 15.1c0-7.9-6.4-14.3-14.3-14.3S98.6 7.1 98.6 15.1 105 29.4 113 29.4s14.3-6.4 14.3-14.3"></path><path fill="navy" d="M64 15.1c-27 0-49 21.9-49 49s21.9 49 49 49 49-21.9 49-49-22-49-49-49zm6 28.6c0-7.9 6.4-14.3 14.3-14.3s14.3 6.4 14.3 14.3S92.2 58 84.3 58 70 51.6 70 43.7z"></path><path fill="gray" d="M66.3 128l-.1-1.5c1.8-.1 3.6-.2 5.4-.4l.2 1.5c-1.8.2-3.7.3-5.5.4zm-5.6 0c-1.9-.1-3.7-.3-5.6-.5l.2-1.5c1.8.2 3.6.4 5.4.5v1.5zm16.6-1.4l-.3-1.4c1.8-.4 3.5-.8 5.3-1.4l.4 1.4c-1.7.6-3.5 1.1-5.4 1.4zm-27.7-.2c-1.8-.4-3.6-.9-5.4-1.5l.5-1.4c1.7.6 3.5 1 5.3 1.5l-.4 1.4zm38.4-3l-.6-1.4c1.7-.7 3.3-1.4 5-2.3l.7 1.3c-1.7.9-3.4 1.7-5.1 2.4zm-49-.4c-1.7-.7-3.4-1.5-5-2.4l.7-1.3c1.6.9 3.3 1.6 4.9 2.4L39 123zm59-4.7l-.8-1.2c1.5-1 3-2 4.5-3.1l.9 1.2c-1.5 1.1-3.1 2.1-4.6 3.1zm-68.8-.6c-1.6-1-3.1-2.1-4.5-3.2l.9-1.2c1.4 1.1 2.9 2.2 4.4 3.2l-.8 1.2zm77.7-6.1l-1-1.1c1.3-1.2 2.7-2.5 3.9-3.8l1.1 1c-1.3 1.3-2.7 2.6-4 3.9zm-86.5-.7c-1.4-1.3-2.7-2.6-3.9-4l1.1-1c1.2 1.3 2.5 2.7 3.8 3.9l-1 1.1zm94.1-7.5l-1.2-.9c1.1-1.4 2.2-2.9 3.2-4.4l1.2.8c-1 1.5-2.1 3.1-3.2 4.5zm-101.6-.8c-1.1-1.5-2.2-3-3.2-4.6l1.2-.8c1 1.5 2 3 3.1 4.5l-1.1.9zm107.7-8.5l-1.3-.7c.9-1.6 1.6-3.3 2.4-4.9l1.3.5-2.4 5.1zM7 93.1c-.8-1.7-1.6-3.4-2.3-5.1l1.3-.5c.7 1.7 1.4 3.3 2.3 5l-1.3.6zm117.9-9.3l-1.4-.5c.6-1.7 1-3.5 1.5-5.3l1.4.3c-.4 1.9-.9 3.7-1.5 5.5zm-122.1-1c-.5-1.8-1-3.6-1.4-5.4l1.4-.3c.4 1.8.8 3.5 1.4 5.3l-1.4.4zm124.6-9.9l-1.5-.2c.2-1.8.4-3.6.5-5.4l1.5.1c0 1.8-.2 3.7-.5 5.5zM.5 71.9C.2 70 .1 68.2 0 66.3l1.5-.1c.1 1.8.2 3.6.4 5.4l-1.4.3zm126-10.1c-.1-1.8-.2-3.6-.4-5.4l1.5-.2c.2 1.8.4 3.7.4 5.6h-1.5zm-125-1L0 60.7c.1-1.9.3-3.7.5-5.6l1.5.3c-.2 1.8-.4 3.6-.5 5.4zM125.2 51c-.4-1.8-.8-3.6-1.4-5.3l1.4-.4c.5 1.8 1 3.6 1.4 5.4l-1.4.3zM3 50l-1.4-.3c.4-1.8.9-3.6 1.5-5.4l1.4.5C3.9 46.5 3.4 48.2 3 50zm119-9.4c-.7-1.7-1.4-3.4-2.3-5l1.3-.7c.8 1.7 1.6 3.4 2.3 5.1l-1.3.6zm-115.6-1L5 39.1c.7-1.7 1.5-3.4 2.4-5l1.3.7c-.8 1.5-1.6 3.2-2.3 4.8zm5.1-9.6l-1.2-.8c1-1.6 2.1-3.1 3.2-4.5l1.2.9c-1.2 1.4-2.2 2.9-3.2 4.4zm6.7-8.6l-1.1-1c1.3-1.4 2.6-2.7 4-3.9l1 1.1c-1.4 1.2-2.7 2.5-3.9 3.8zm8.1-7.3l-.9-1.2c1.5-1.1 3-2.2 4.6-3.2l.8 1.2c-1.6 1.1-3.1 2.1-4.5 3.2zm67-5.4c-1.6-.8-3.3-1.6-4.9-2.3l.5-1.4c1.7.7 3.4 1.5 5 2.4l-.6 1.3zm-57.8-.4L34.8 7c1.7-.8 3.4-1.6 5.1-2.3l.6 1.3c-1.7.7-3.4 1.5-5 2.3zm47.7-3.8c-1.7-.6-3.5-1-5.3-1.4l.3-1.4c1.8.4 3.6.9 5.4 1.5l-.4 1.3zm-37.6-.3l-.4-1.4c1.8-.5 3.6-1 5.4-1.4l.3 1.4c-1.8.4-3.6.9-5.3 1.4zm27-2.2c-1.8-.2-3.6-.4-5.4-.5l.1-1.5c1.9.1 3.7.3 5.6.5L72.6 2zm-16.3-.1L56.1.4c1.8-.2 3.7-.4 5.6-.4l.1 1.5c-1.9 0-3.7.2-5.5.4z"></path>
                                            </svg>
                                            <span>Lua</span>
                                        </div>
                                    </div>
                                    <div className="column is-4">
                                        <div className="box">
                                            <svg viewBox="0 0 128 128">
                                                <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                                            </svg>
                                            <span>React</span>
                                        </div>
                                    </div>
                                    <div className="column is-4">
                                        <div className="box">
                                            <svg viewBox="0 0 128 128">
                                                <path fill="#00D1B2" d="M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z"></path>
                                            </svg>
                                            <span>Bulma</span>
                                        </div>
                                    </div>
                                    <div className="column is-4">
                                        <div className="box">
                                            <svg viewBox="0 0 128 128">
                                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"></path>
                                            </svg>
                                            <span>MongoDB</span>
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;