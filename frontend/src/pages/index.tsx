import { Page } from "@/components/Page";
import { getPosts, Post } from "@/clients/api";
import { Layout } from "@snokam/core";
import { LayoutTheme, Padding, TransitionType } from "@snokam/core/layout";
import { GetServerSideProps } from "next";

interface HomePageProps {
  post: Post | null;
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  try {
    const posts = await getPosts({ limit: 1 });
    return { props: { post: posts[0] || null } };
  } catch (error) {
    return { props: { post: null } };
  }
};

const HomePage = ({ post }: HomePageProps) => (
  <Page>
    <Layout.Container
      theme={LayoutTheme.Light}
      transitions={{
        bottom: {
          type: TransitionType.Wave,
        },
      }}
    >
      <Layout.Content>
        <Layout.Section padding={{ bottom: Padding.Large }}>
          <h1>Cursor Workshop</h1>
          <p>A starter project for learning AI-assisted development with Cursor and Claude.</p>
          {post ? (
            <>
              <h3>Latest Post: {post.title}</h3>
              <p>{post.excerpt}</p>
            </>
          ) : (
            <p>No posts found</p>
          )}
        </Layout.Section>
      </Layout.Content>
    </Layout.Container>
  </Page>
);

export default HomePage;
