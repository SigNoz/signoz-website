export interface CountPayload {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
  };
  stargazers_count: number;
  watchers_count: number;
  watchers: number;
  network_count: number;
  subscribers_count: number;
  svn_url: string;
}
