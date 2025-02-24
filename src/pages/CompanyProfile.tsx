import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { useCompany } from "@/hooks/useCompany";

const CompanyProfile = () => {
  const { id } = useParams();
  const { data: company, isLoading } = useCompany(id);

  if (isLoading) return <div>Loading...</div>;
  if (!company) return <div>Company not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border p-8">
            {/* Company header */}
            <div className="flex items-center gap-6 mb-8">
              <img
                src={company.logo}
                alt={company.name}
                className="w-24 h-24 rounded-lg"
              />
              <div>
                <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
                <p className="text-gray-600">{company.industry}</p>
              </div>
            </div>

            {/* Company details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">About Us</h2>
                <p className="text-gray-600">{company.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Open Positions</h2>
                {/* List company's open positions */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyProfile; 