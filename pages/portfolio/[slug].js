import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '../../components/header'
import { fetchEntries } from '../../lib/contentfulEntries'
import Tilt from 'react-parallax-tilt'

export async function getStaticPaths() {
    const res = await fetchEntries('portfolioPagePortfolio')
    const paths = res.map((entry) => ({
        params: {
            slug: entry.fields.slug,
        },
    }))

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const res = await fetchEntries('portfolioPagePortfolio', params.slug)
    const entries = res.map((entry) => entry.fields)
    return {
        props: {
            data: entries[0],
        },
    }
}

const PortfolioDetailPage = ({ data }) => {
    return (
        <>
            <Header
                metaTitle="Son Nguyen | About"
                metaDescription={`Working with agencies and teams that help brands communicate and connect with the people that love and adore them.`}
            />
            <motion.main exit={{ opacity: 0 }}>
                <section className="block agency">
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
                                        03. Portfolio
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
                                            Passionate to deliver
                                        </motion.span>
                                    </span>
                                    <span className="reveal-text">
                                        <motion.span
                                            initial={{ y: 60 }}
                                            animate={{ y: 0 }}
                                            transition={{
                                                duration: 1,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            exceptional experiences.
                                        </motion.span>
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className="item">
                            <a href={data.url} target="_blank">
                                <Tilt glareEnable="true">
                                    <div className="image">
                                        <Image
                                            src={`https:${data.image.fields.file.url}`}
                                            alt={data.title + ' website'}
                                            placeholder="blur"
                                            blurDataURL="/images/Progressively-Loading-Images-With-Blur-Effect-min.png"
                                            width={1280}
                                            height={720}
                                        />
                                    </div>
                                </Tilt>
                            </a>
                        </div>
                    </div>
                </section>
            </motion.main>
            <footer></footer>
        </>
    )
}
export default PortfolioDetailPage
