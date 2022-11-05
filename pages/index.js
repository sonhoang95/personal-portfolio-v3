import Header from '../components/header';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Canvas from '../components/canvas';

export default function Home() {
  return (
    <>
      <Header
        metaTitle='Son Nguyen | Personal Portfolio'
        metaDescription='Connecting brands with their audience through rich and engaging digital experiences.'
      />

      <motion.main exit={{ opacity: 0 }}>
        <Canvas />

        <section className='block hero'>
          <div className='wrapper'>
            <div className='row'>
              <div className='col'>
                <motion.h1
                  className='label'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  Son Nguyen
                </motion.h1>

                <h2 className='h1 reveal-text'>
                  <motion.span
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                    }}
                  >
                   I build things for the web.
                  </motion.span>
                </h2>

                <p className='reveal-text'>
                  <motion.span
                    initial={{ y: 150 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.25 }}
                  >
                   I&apos;m a front-end developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products at <a href="https://www.trimble.com">Trimble</a>.
                  </motion.span>
                </p>
                <div className='reveal-text'>
                  <Link href='/portfolio' passHref={true}>
                    <motion.a
                      className='cta'
                      initial={{ y: 30 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, delay: 2.5 }}
                    >
                      View portfolio
                    </motion.a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
      <footer></footer>
    </>
  );
}
