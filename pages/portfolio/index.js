import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '../../components/header'
import Tilt from 'react-parallax-tilt'
import { fetchEntries } from '../../lib/contentfulEntries'
import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetchEntries('portfolioPagePortfolio')
    const entries = res.map((entry) => entry.fields)

    return {
        props: {
            data: entries,
        },
    }
}

export default function PortfolioPage({ data }) {
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
                    </div>
                </section>

                <motion.section
                    className="block portfolio"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 1.75,
                    }}
                >
                    <div className="wrapper">
                        <div className="row">
                            {data.map((item, i) => (
                                <PortfolioCard key={i} item={item} />
                            ))}
                        </div>
                    </div>
                </motion.section>
            </motion.main>

            <footer></footer>
        </>
    )
}

const PortfolioCard = ({ item }) => {
    return (
        <div className="item">
            <a href={item.url} target="_blank">
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
            </a>
            <div className="content">
                <h2 className="title h5">{item.title}</h2>
                <Link href={`/portfolio/${item.slug}`}>
                    <a
                        style={{
                            borderLeft: '2px solid #f2edda',
                            borderRight: item.githubUrl
                                ? '2px solid #f2edda'
                                : null,
                        }}
                    >
                        View Details
                    </a>
                </Link>
                {item.githubUrl && (
                    <a href={item.githubUrl} target="_blank">
                        Github
                    </a>
                )}
            </div>
        </div>
    )
}
