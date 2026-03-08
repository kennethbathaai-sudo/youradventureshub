-- AdventureHub Database Schema

-- Enable UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles (extends Clerk auth)
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    clerk_id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    avatar_url TEXT,
    bucket_list TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Adventures (seeded data)
CREATE TABLE adventures (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL,
    location_continent VARCHAR(100),
    location_country VARCHAR(100),
    location_region VARCHAR(100),
    difficulty VARCHAR(50) DEFAULT 'moderate',
    duration VARCHAR(100),
    price_min DECIMAL(10,2),
    price_max DECIMAL(10,2),
    provider VARCHAR(255),
    provider_url TEXT,
    image_url TEXT,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    adventure_id UUID REFERENCES adventures(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    user_name VARCHAR(255),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Provider inquiries
CREATE TABLE provider_inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    description TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_adventures_category ON adventures(category);
CREATE INDEX idx_adventures_continent ON adventures(location_continent);
CREATE INDEX idx_adventures_country ON adventures(location_country);
CREATE INDEX idx_adventures_difficulty ON adventures(difficulty);
CREATE INDEX idx_adventures_featured ON adventures(featured);
CREATE INDEX idx_reviews_adventure ON reviews(adventure_id);
CREATE INDEX idx_profiles_clerk ON profiles(clerk_id);

-- Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE adventures ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public can read profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Public can read adventures" ON adventures FOR SELECT USING (true);
CREATE POLICY "Public can read reviews" ON reviews FOR SELECT USING (true);
CREATE POLICY "Auth users can create reviews" ON reviews FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Anyone can create inquiry" ON provider_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can read inquiries" ON provider_inquiries FOR SELECT USING (true);
