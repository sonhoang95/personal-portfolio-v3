import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '../components/header'
import Tilt from 'react-parallax-tilt'
import { fetchEntries } from '../lib/contentfulEntries'

export async function getStaticProps() {
    const res = await fetchEntries('portfolioPagePortfolio')
    const entries = res.map((entry) => entry.fields)

    return {
        props: {
            data: entries,
        },
    }
}

export default function Home({ data }) {
    return (
        <>
            <Header
                metaTitle="Son Nguyen | Portfolio"
                metaDescription={`Projects I've scoped, created, and delivered over the years.`}
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
                                        Portfolio
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
                    </div>
                </section>

                <motion.section
                    className="block portfolio"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 2.5,
                    }}
                >
                    <div className="wrapper">
                        <div className="row">
                            {data.map((item, i) => (
                                <div className="item" key={i}>
                                    <Tilt glareEnable="true">
                                        <div className="image">
                                            <Image
                                                src={`https:${item.image.fields.file.url}`}
                                                alt={item.title + ' website'}
                                                placeholder="blur"
                                                blurDataURL="/images/Progressively-Loading-Images-With-Blur-Effect-min.png"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                    </Tilt>
                                    <div className="content">
                                        <h2 className="title h6">
                                            {item.title}
                                        </h2>
                                        {item.url && (
                                            <a href={item.url} target="_blank">
                                                Visit site
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </motion.main>

            <footer></footer>
        </>
    )
}
