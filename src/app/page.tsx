import { Ide } from '@/components/Ide';
import { fetchRepos } from '@/lib/github';

export default async function Home() {
  const initialProjects = await fetchRepos();
  return <Ide initialProjects={initialProjects} />;
}
