import { motion } from 'framer-motion'
import Header from '../components/header'
import { fetchEntries } from '../lib/contentfulEntries'
import md from 'markdown-it'

export async function getStaticProps() {
    const res = await fetchEntries('aboutPageAboutSection')
    const entries = res.map((entry) => entry.fields)

    return {
        props: {
            data: entries,
        },
    }
}

export default function About({ data }) {
    const aboutPageData = data.find((item) =>
        item.title.includes('About Section - About Page')
    )

    return (
        <>
            <Header
                metaTitle="Son Nguyen | About"
                metaDescription={`Working with agencies and teams that help brands communicate and connect with the people that love and adore them.`}
            />

            <motion.main exit={{ opacity: 0 }}>
                <section className="block about">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col">
                                <h1 className="label reveal-text">
                                    <motion.span
                                        initial={{ y: 60 }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.1,
                                        }}
                                    >
                                        {aboutPageData.eyebrow}
                                    </motion.span>
                                </h1>
                                <h2 className="h1">
                                    <span className="reveal-text">
                                        <motion.span
                                            initial={{ y: 60 }}
                                            animate={{ y: 0 }}
                                            transition={{
                                                duration: 1,
                                            }}
                                        >
                                            {aboutPageData.header}
                                        </motion.span>
                                    </span>
                                </h2>

                                <motion.div
                                    className="content"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 2,
                                        delay: 1.25,
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: md().render(aboutPageData.body),
                                    }}
                                />
                                <motion.ul
                                    className="content tech-stack-column"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 2,
                                        delay: 1.5,
                                    }}
                                >
                                    {aboutPageData.techStacks.map(
                                        (item, index) => (
                                            <li key={index}>{item}</li>
                                        )
                                    )}
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.main>

            <footer></footer>
        </>
    )
}
